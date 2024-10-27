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
    <Infoteam className="flex mx-10 items-center justify-center max-w-8xl mx-auto">
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
    description:
      "Technical Lead",
    icon: (
      <img
        src="Bach.JPG"
        alt="Trinh Xuan Bach"
        className="h-56 w-56 filter rounded-lg grayscale"
      />
    ),
  },
  {
    title: "Hiep Tran",
    description:
      "Founder | Project Manager",
    icon: (
      <img
        src="Hiep.jpg"
        alt="Tran Huy Hiep"
        className="h-56 w-56 rounded-lg filter grayscale"
      />
    ),
  },
  {
    title: "Minh Le Dinh",
    description:
      "Business Analyst",
    icon: (
      <img
        src="Minh.JPG"
        alt="Le Dinh Minh"
        className="h-56 w-56 rounded-lg filter grayscale"
      />
    ),
  }
];
