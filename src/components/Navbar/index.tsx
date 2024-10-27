import React from "react";
import NavButton from "../NavButton/NavButton";
import {
  IconNotebook,
  IconGift,
  IconRocket,
  IconHome,
  Icon2fa,
  IconUser,
  IconDeviceAirpods,
  IconSearch,
  IconBrandProducthunt,
  IconBook2,
  IconBook,
  IconWorldSearch,
  IconUsers,
} from "@tabler/icons-react";

const Navbar = () => {
  return (
    <nav>
      <div className="w-full flex justify-start ">
        <NavButton id="#tex-app" text="Home" icon={<IconHome stroke={2} />} />{" "}
        <NavButton
          id="#tex-solutions"
          text="Solutions"
          icon={<IconWorldSearch stroke={2} />}
        />
        <NavButton
          id="#tex-products"
          text="Products"
          icon={<IconBook stroke={2} />}
        />
        <NavButton
          id="#tex-about"
          text="About US"
          icon={<IconUsers stroke={2} />}
        />
      </div>
    </nav>
  );
};

export default Navbar;
