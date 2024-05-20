import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const MetaTags = () => {
  const { t, i18n } = useTranslation();
  const location = useSelector((state) => state.location.location);

  const [metaTitle, setMetaTitle] = useState(t("meta.app_title"));
  const [metaDescription, setMetaDescription] = useState(
    t("meta.app_description")
  );

  useEffect(() => {
    if (location) {
      let loc = `${location.name}, ${
        location.state ? `${location.state}, ` : ""
      } ${location.country}`;
      setMetaTitle(
        t("meta.app_title_loc", {
          location: loc,
        })
      );
      setMetaDescription(
        t("meta.app_description_loc", {
          location: loc,
        })
      );
    } else {
      setMetaTitle(t("meta.app_title"));
      setMetaDescription(t("meta.app_description"));
    }
  }, [i18n, i18n.resolvedLanguage, t, location]);

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
  );
};

export default MetaTags;
