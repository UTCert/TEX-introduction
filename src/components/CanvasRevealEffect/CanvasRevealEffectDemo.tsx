"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./CanvasRevealEffect";
import DualSystemIcon from "../../../public/DualSystem";
import Borrow from "../../../public/Borrow";
import SwapIcon from "@public/Swap";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-[-10px] flex flex-col lg:flex-row items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.04] w-full gap-4 mx-auto px-8">
        <Card
          title="Blockchain Learning Platform and Decentralized Education Management"
          description="Education"
          icon={<SwapIcon />}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>

        <Card
          title="Healthcare Medical Applications Using Blockchain Platform"
          description="Health care"
          icon={<Borrow />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
          />
        </Card>

        <Card
          title="Decentralized Cryptocurrency Management Application"
          description="Finance"
          icon={<DualSystemIcon />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  description: string;
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.2] group/canvas-card flex items-center justify-center  max-w-sm w-full mx-auto p-4 h-[30rem] relative"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 ">
        <div className="text-center w-36 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-100 transition duration-200   mx-auto flex items-center justify-center">
          {icon}
        </div>
        <div className="text-center text-white  text-2xl font-extrabold group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center ">
          {description}
        </div>
        <h2 className="text-white  text-center text-transparent bg-gradient-to-r from-white to-white bg-clip-text text-lg opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
