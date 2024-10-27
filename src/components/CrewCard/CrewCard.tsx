import Image from "next/image";
import React from "react";
import PlanetPng from "@public/Planet.png";
import { FaDiscord, FaLinkedin, FaTwitter } from "react-icons/fa";

interface ICardProps {
  title: string;
  description: string;
  containerClass?: string;
  link: string;
  icon: any;
  // buttonText: string;
  // buttonAction: () => void;
}

const CrewCard: React.FC<ICardProps> = ({
  title,
  description,
  containerClass,
  link,
  icon,
}) => {
  return (
    <div className={`card flex-col   ${containerClass}`}>
      <figure className="flex  ">
        <Image
          className="rounded-t-lg"
          src={icon}
          width={200}
          height={200}
          alt="car!"
        />
      </figure>
      <div
        className={`card flex-row max-w-36 bg-black min-w-60 border-2 border-b border-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-[5px_5px_0px_0px_#6D28D9] hover:border-tex-purple rounded-lg ${containerClass}`}
        style={{ backdropFilter: "blur(20px)" }}
      >
        <div className="card-body py-4 px-6">
          <h2 className="bg-gradient-to-r from-white to-white card-title">
            {title}
          </h2>
          <p>{description}</p>
          <a
            href={link}
            className="text-white text-lg hover:text-indigo-500 transition-all duration-300 ease"
            target="_noblank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CrewCard;
