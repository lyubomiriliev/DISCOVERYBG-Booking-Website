import React from "react";
import { discoveryToShare, MTlogo, siteLogoBlack } from "../assets";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col justify-between h-80 bg-gradient-to-r from-secondary to-primary mt-20 font-outfit">
      <div className="max-w-screen-xl w-full mx-auto justify-start flex flex-col">
        <img className="w-48 md:w-60 mt-2" src={siteLogoBlack} alt="Logo" />
      </div>
      <div className="max-w-screen-xl space-y-4 w-full mx-auto justify-center items-center">
        <a
          href="https://discoverybg.eu/%d0%be%d0%b1%d1%89%d0%b8-%d1%83%d1%81%d0%bb%d0%be%d0%b2%d0%b8%d1%8f/"
          rel="noopener noreferrer"
          className="font-body uppercase text-black text-sm hover:text-primary duration-300 font-medium flex p-2"
        >
          {t("obshtiUsloviq")}
        </a>
        <a
          href="https://discoverybg.eu/privacy-policy/"
          rel="noopener noreferrer"
          className="font-body uppercase text-black text-sm hover:text-primary duration-300 font-medium flex p-2"
        >
          {t("poveritelnost")}
        </a>
        <a
          href="https://discoverybg.eu/%d0%b3%d0%b0%d0%bb%d0%b5%d1%80%d0%b8%d1%8f/"
          rel="noopener noreferrer"
          className="font-body uppercase text-black text-sm hover:text-primary duration-300 font-medium flex p-2"
        >
          {t("vruzka")}
        </a>
      </div>
      <div className="flex flex-col items-center mb-2">
        <p className="font-body font-medium text-black text-xs md:text-sm uppercase">
          Copyright &copy; 2024. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
