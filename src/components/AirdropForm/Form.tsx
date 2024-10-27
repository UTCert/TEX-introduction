import React, { useState, useEffect } from "react";
import { Label } from "./Label";
import { Input } from "./Input";
import { cn } from "@/utils/cn";
import {
  IconBrandDiscord,
  IconBrandMedium,
  IconBrandTelegram,
  IconBrandX,
  IconX,
} from "@tabler/icons-react";
import { db } from "@/utils/firebase";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";
import { increment } from "firebase/firestore";
import Link from "next/link";

interface AirdropFormProps {
  isFormOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function AirdropForm({ isFormOpen, setIsOpen }: AirdropFormProps) {
  const [isRegistered, setIsRegistered] = useState(false);
  const [invalidRef, setInvalidRef] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    firstname: false,
    lastname: false,
    email: false,
    reference: false,
  });
  const [formNotFilled, setFormNotFilled] = useState(false);
  const [multiplier, setMultiplier] = useState(1); // Default 1X multiplier on form submission
  const [linksClicked, setLinksClicked] = useState({
    discord: false,
    x: false,
    linkedin: false,
    medium: false,
  });
  const [checkEmail, setCheckEmail] = useState("");
  const [checkResult, setCheckResult] = useState("");

  useEffect(() => {
    const totalClicks = Object.values(linksClicked).filter(Boolean).length;
    setMultiplier(1 + totalClicks * 0.1); // Adding default 1X multiplier plus click multipliers
  }, [linksClicked]);

  const validateForm = (data: {
    firstname: string;
    lastname: string;
    email: string;
    reference: string;
  }) => {
    const errors = {
      firstname: !data.firstname.trim(),
      lastname: !data.lastname.trim(),
      email: !data.email.trim(),
      reference:
        data.reference && !data.reference.trim() ? data.reference : false,
    };

    setFormErrors({
      ...errors,
      reference: errors.reference as boolean, // Update the type of reference to boolean
    });
    return Object.values(errors).some((error) => error); // Return true if any error exists
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      firstname: form.firstname.value,
      lastname: form.lastname.value,
      email: form.email.value,
      reference: form.ref.value,
      multiplier,
    };

    if (validateForm(data)) {
      setFormNotFilled(true);
      return;
    } else {
      setFormNotFilled(false);
    }

    const emailQuery = query(
      collection(db, "airdropForms"),
      where("email", "==", data.email),
    );
    const emailQuerySnapshot = await getDocs(emailQuery);

    setIsRegistered(false);
    setInvalidRef(false);

    if (!emailQuerySnapshot.empty) {
      setIsRegistered(true);
      return;
    }

    let refDocId = null;
    if (data.reference) {
      const refQuery = query(
        collection(db, "airdropForms"),
        where("email", "==", data.reference),
      );
      const refQuerySnapshot = await getDocs(refQuery);
      if (!refQuerySnapshot.empty) {
        refDocId = refQuerySnapshot.docs[0].id;
      } else {
        setInvalidRef(true);
        return;
      }
    }

    try {
      const docRef = await addDoc(collection(db, "airdropForms"), data);

      if (refDocId) {
        const refDocRef = doc(db, "airdropForms", refDocId);
        await updateDoc(refDocRef, {
          referrals: increment(1),
          multiplier: increment(0.1),
          referralEmails: arrayUnion(data.email),
        });
      }

      setFormSubmitted(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleCheckEmail = async () => {
    const emailQuery = query(
      collection(db, "airdropForms"),
      where("email", "==", checkEmail),
    );
    const emailQuerySnapshot = await getDocs(emailQuery);
    if (!emailQuerySnapshot.empty) {
      const userData = emailQuerySnapshot.docs[0].data();
      setCheckResult(`${(userData.multiplier || 0).toFixed(2)}X`);
    } else {
      setCheckResult("Not Found");
    }
  };

  const getCheckButtonText = () => {
    if (checkResult) return checkResult;
    return "Check";
  };

  const getSubmitButtonText = () => {
    if (isRegistered) return "Already Registered";
    if (invalidRef) return "Invalid Reference";
    if (formSubmitted) return "Thank You";
    if (formNotFilled) return "Please fill all the fields";
    return "Sign up →";
  };

  const handleLinkClick = (link: string) => {
    setLinksClicked((prev) => ({ ...prev, [link]: true }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-40">
      <div className="sm:max-w-md max-w-sm border border-gray-800 sm:max-h-[825px] max-h-[600px] mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black fixed left-[50%] top-[50%] z-50 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden overflow-y-auto">
        <button
          onClick={() => setIsOpen(false)}
          className="sm:px-[23rem] px-[20rem] mb-2"
        >
          <IconX className="text-white" stroke={1} />
        </button>
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Become an early mover
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Register now to get a default 1X multiplier, and earn an additional
          0.10X multiplier for each referral, the more you and your friends
          participate, the greater your rewards when our testnet campaign
          launches!
        </p>
        <form className="my-2" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="Tyler" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Durden" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-3">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="gavin@hooli.com" type="email" />
          </LabelInputContainer>

          <LabelInputContainer className="mb-3">
            <Label htmlFor="ref">Reference</Label>
            <Input id="ref" placeholder="gavin@hooli.com" type="email" />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            {getSubmitButtonText()}
            <BottomGradient />
          </button>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-3 h-[1px] w-full" />
          <div className="flex flex-col space-y-4">
            <div className="items-center flex">
              <LabelInputContainer className="pr-15">
                <Input
                  id="multiplier"
                  placeholder="Check your multiplier!"
                  value={checkEmail}
                  onChange={(e) => setCheckEmail(e.target.value)}
                  type="email"
                />
              </LabelInputContainer>
              <button
                type="button"
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-40 text-white rounded-sm rounded-r-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                onClick={handleCheckEmail}
              >
                {getCheckButtonText()}
                <BottomGradient />
              </button>
            </div>

            <Link href="https://discord.gg/JxUnnzcAjk" target="_noblank">
              <button
                onClick={() => handleLinkClick("discord")}
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="button"
              >
                <IconBrandDiscord className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Discord
                </span>
                <BottomGradient />
              </button>
            </Link>
            <Link href="https://x.com/" target="_noblank">
              <button
                onClick={() => handleLinkClick("x")}
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="button"
              >
                <IconBrandX className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  X
                </span>
                <BottomGradient />
              </button>
            </Link>
            <Link href="https://www.linkedin.com/" target="_noblank">
              <button
                onClick={() => handleLinkClick("linkedin")}
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="button"
              >
                <IconBrandTelegram className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Telegram
                </span>
                <BottomGradient />
              </button>
            </Link>
            <Link href="https://medium.com/" target="_noblank">
              <button
                onClick={() => handleLinkClick("medium")}
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="button"
              >
                <IconBrandTelegram className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Medium
                </span>
                <BottomGradient />
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
