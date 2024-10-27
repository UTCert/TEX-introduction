import React, { useState } from "react";
import { db } from "@/utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { IconX } from "@tabler/icons-react";
import { Input } from "./Input";
import { Label } from "./Label";
import { cn } from "@/utils/cn";

export const ContactUs = ({
  isFormOpen,
  setIsOpen,
}: {
  isFormOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [companyName, setCompanyName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!companyName || !fullName || !email || !message) {
      setError("Please fill all fields");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    const data = {
      companyName,
      fullName,
      email,
      message,
    };

    try {
      const docRef = await addDoc(collection(db, "contactForms"), data);
      setFeedback("Sent!");
      setIsSubmitted(true);
      clearFormFields();
    } catch (e: any) {
      setFeedback("Failed to send");
      setError(e.message);
    }
  };

  const clearFormFields = () => {
    setCompanyName("");
    setFullName("");
    setEmail("");
    setMessage("");
  };

  const getSubmitButtonText = () => {
    if (isSubmitted) return "Sent!";
    if (feedback) return feedback;
    return "Send →";
  };

  return (
    <div className="fixed inset-0  bg-black bg-opacity-75 z-40 ">
      <div className="sm:max-w-md max-w-sm border border-gray-800  max-h-[825px]  mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black fixed left-[50%] top-[53%] z-50 translate-x-[-50%] translate-y-[-50%] gap-4 border-sm shadow-lg sm:rounded-lg">
        <button
          onClick={() => setIsOpen(false)}
          className="sm:px-[23rem] px-[20rem] mb-2"
        >
          <IconX className="text-white" stroke={1} />
        </button>
        <h2 className="font-bold text-xl text-neutral-200">Contact Us</h2>
        <p className="text-sm max-w-sm mt-2 text-neutral-300">
          We&apos;ll get back to you in 24 hours.
        </p>
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                placeholder="Hooli"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                placeholder="Gavin Belson"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="hooli@hooli.com"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <Input
              id="message"
              placeholder="Hi!"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </LabelInputContainer>
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            {getSubmitButtonText()}
            <BottomGradient />
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

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
