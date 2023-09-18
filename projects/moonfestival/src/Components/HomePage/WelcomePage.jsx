import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Youtube from './Youtube';
import { useTranslation } from "react-i18next";

const WelcomePage = ({toggleSound}) => {
  const { t } = useTranslation();
  return (
    <div className="mainBody welcomePage">
      <h1 className="welcomeH1">Mid Autumn Festival 中秋節</h1>
      <Link onClick={toggleSound} to="/gamePage1">
        <div className="button welcomeBtn">
          <button>{t("start")}</button>
        </div>
      </Link>
      <div style={{ display: "flex", gap: 20, }}>
        <Youtube embedId="l2RKMqrEKSU?si=toWSZs5abCfBGkWg" vsn="Version 1" />
        <Youtube embedId="R8tHNitL-LU?si=aQ2PCfDSptHAXy66" vsn="Version 2" />
      </div>
    </div>
  );
}

export default WelcomePage