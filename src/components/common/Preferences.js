import React from "react";
import Switcher from "./Switcher";
import { useTranslation } from "react-i18next";
import Location from "./Location";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const Preferences = () => {
  const { t, i18n } = useTranslation();
  const modal = useSelector((state) => state.modal.modal);
  const activeLocale = i18n.resolvedLanguage;

  const localeChange = () => {
    if (activeLocale === "en") {
      i18n.changeLanguage("uk");
      Cookies.set("i18next", "uk");
    } else if (activeLocale === "uk") {
      i18n.changeLanguage("en");
      Cookies.set("i18next", "en");
    }
  };

  return (
    <div className="container_horizontal preferences">
      <Location />
      <Switcher
        className={modal ? " hidden" : ""}
        sourceValue={activeLocale === "uk"}
        values={["EN", "UK"]}
        onChange={localeChange}
        title={t("sidebar.language_switch_title")}
      />
    </div>
  );
};

export default Preferences;
