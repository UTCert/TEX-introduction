import { cn } from "@/utils/cn";
import React from "react";
import { Infocard, InfocardItem } from "./Infocard";
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
} from "@tabler/icons-react";
import { MeteorsDemo } from "../Meteors/MeteorsDemo";

export function InfocardDemo() {
  return (
    <Infocard className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <InfocardItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </Infocard>
  );
}
const Skeleton = () => <MeteorsDemo />;
const items = [
  {
    title: "UTCert: Tamper-proof Certificate System",
    description:
      "We develop a blockchain-based certificate store website that improves the process of generating and issuing certificates, ensures secure storage, and enables fast certificate verification.",
    header: <Skeleton />,
    icon: (
      <IconFileCertificate stroke={3} className="h-4 w-4 text-neutral-500" />
    ),
  },
  {
    title:
      "TEX Academy: Cardano-Oriented Blockchain Learning and Education Platform",
    description:
      "We will create a blockchain-based platform that offers Cardano blockchain courses, empowering global educators and learners, while providing free access to university students to blockchain education.",
    header: <Skeleton />,
    icon: <IconSchool stroke={2} className="h-4 w-4 text-neutral-500" />,
  },
  {
    title:
      "EduChain: Education management system applying blockchain technology",
    description:
      "Our system will increase transparency in student data management system including: scores, NFT certificates, related documents, and enhance system security, anti-fraud during the learning process.",
    header: <Skeleton />,
    icon: <IconBuilding stroke={2} className="h-4 w-4 text-neutral-500" />,
  },
  {
    title:
      "ScholarSecure: Transparent Blockchain-Based Scholarship Management on Cardano Blockchain",
    description:
      "Aims to revolutionize the management and distribution of scholarship funds. By leveraging the Cardano blockchain, it ensures a transparent, secure, and efficient scholarship management process.",
    header: <Skeleton />,
    icon: <IconBuildingBank stroke={2} className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Ticket Market NFTs: Revolutionizing Event Ticketing with NFTs",
    description:
      "NFT event ticketing platform to preserve attendee memories as digital collectibles while preventing counterfeiting, ensuring security and authenticity for all system users system.",
    header: <Skeleton />,
    icon: <IconBuildingStore stroke={2} className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "CareBlock: Empowering secure healthcare transactions",
    description:
      "Decentralized healthcare insurance on Cardano, ensuring secure, transparent, and efficient management of medical records and claims for users in Vietnam.",
    header: <Skeleton />,
    icon: <IconHeartbeat stroke={2} className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Marlowe Hub",
    description:
      "We will create a new platform to enhance Marlowe's accessibility and usability, focusing on stability and integrating AI features to simplify user interactions.",
    header: <Skeleton />,
    icon: <IconSourceCode stroke={2} className="h-4 w-4 text-neutral-500" />,
  },
];
