import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function useMetaTags() {
  const { t, i18n } = useTranslation();
  const location = useSelector((state) => state.location.location);

  useEffect(() => {
    if (location) {
      document.title = t("app_title_loc", {
        location: `${location.name}, ${
          location.state ? `${location.state}, ` : ""
        } ${location.country}`,
      });
    }
    /* else{
        document.title = t("app_title")
    } */
  }, [i18n, i18n.resolvedLanguage, t, location]);
}
