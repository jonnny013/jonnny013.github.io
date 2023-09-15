import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSelector({reset}) {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    reset();
    i18n.changeLanguage(lng);
  };

  return (
    <div className="navLangButtonsDiv">
      <button className="navLangButtons" onClick={() => changeLanguage("en")}>
        English
      </button>
      <button className="navLangButtons" onClick={() => changeLanguage("zw")}>
        中文
      </button>
    </div>
  );
}

export default LanguageSelector;
