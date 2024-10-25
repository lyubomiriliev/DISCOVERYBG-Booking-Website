import React from 'react';
import { useTranslation } from 'react-i18next';

const TouristPackageDays = ({ dayNumber, variant, bgColor, details, tourTitle, lunchDetails, night, timeStamps = [] }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col items-center mt-5 bg-secondaryOpacity20">
      <div className={`w-full h-14 flex flex-col justify-center items-center ${bgColor}`}>
        <h1 className="font-body uppercase font-bold text-white text-3xl">{`${t('day')} ${dayNumber}`}</h1>
      </div>
      <div className="w-full justify-end pr-4 pt-2 flex">
        {variant !== undefined && (
          <h3 className="font-body uppercase font-bold text-primary text-sm">{`${t('variant')} ${variant}`}</h3>
        )}
      </div>
      <div className="font-body font-bold text-xs mt-2 uppercase">{t(tourTitle)}</div>

      <div className="text-left flex flex-col mt-5 w-[90%]">
        <div className="grid grid-cols-[1fr_auto] gap-x-4 mb-4">
          <div className="font-body font-bold text-base uppercase">{t('activity')}</div>
          <div className="font-body font-bold text-base text-right uppercase">{t('duration')}</div>
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-x-4">
          {details.map((detail, index) => (
            <React.Fragment key={index}>
              <div className="font-body text-sm mb-4 w-full">
                {t(detail)}
              </div>
              <div className="font-body text-sm mb-4 text-right">
              {timeStamps[index]} {t("min")}
              </div>
            </React.Fragment>
          ))}
        </div>
        <p className="font-body font-bold text-xl mt-4 mb-10 text-secondary">{lunchDetails && t(lunchDetails)}</p>
        <p className="font-body font-bold text-xl mt-4 mb-10 text-secondary">{night && t(night)}</p>
      </div>
    </div>
  );
};

export default TouristPackageDays;
