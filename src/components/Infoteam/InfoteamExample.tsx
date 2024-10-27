import { cn } from "@/utils/cn";
import React from "react";
import { Infoteam, InfoteamItem } from "./Infoteam";
import {
  IconBoxAlignRightFilled,
  IconSettings,
  IconHierarchyOff,
  IconSparkles,
  IconBuilding,
  IconArrowsShuffle,
  IconBuildingBank,
  IconUserCheck,
  IconGauge,
  IconUser,
  IconHeartbeat,
  IconCertificate,
  IconSchool,
  IconFileCertificate,
  IconBuildingStore,
  IconSourceCode,
  IconSocial,
} from "@tabler/icons-react";
import { MeteorsDemo } from "../Meteors/MeteorsDemo";
import { text } from "stream/consumers";

export function InfoteamDemo() {
  return (
    <Infoteam className="mx-10 items-center justify-center max-w-5xl mx-auto">
      {items.map((item, i) => (
        <InfoteamItem
          key={i}
          title={item.title}
          description={item.description}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </Infoteam>
  );
}
const Skeleton = () => <MeteorsDemo />;

const items = [
  {
    title: "Bach Trinh",
    description: "Technical Lead",
    icon: (
      <img
        src="Bach.JPG"
        alt="Trinh Xuan Bach"
        className="h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56 rounded-lg filter grayscale transition-transform duration-300 hover:scale-105"
      />
    ),
  },
  {
    title: "Hiep Tran",
    description: "Founder | Project Manager",
    icon: (
      <img
        src="Hiep.jpg"
        alt="Tran Huy Hiep"
        className="h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56 rounded-lg filter grayscale transition-transform duration-300 hover:scale-105"
      />
    ),
  },
  {
    title: "Minh Le Dinh",
    description: "Business Analyst",
    icon: (
      <img
        src="Minh.JPG"
        alt="Le Dinh Minh"
        className="h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56 rounded-lg filter grayscale transition-transform duration-300 hover:scale-105"
      />
    ),
  },
];
