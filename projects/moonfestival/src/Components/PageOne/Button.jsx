import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../../il8n";
import { useState } from "react";


const Button = (props) => {
  const { t, i18n } = useTranslation();
  const isChinese = i18n.language === "zw";
  
  return (
    <>
      {props.answer !== "" && (
        <div className={isChinese ? "chineseAnswer" : "answer"}>
          <h2>{props.answerText}</h2>
        </div>
      )}
      {props.answer === "correct" && (
        <Link to={`${props.link}`} onClick={props.reset}>
          <div className={isChinese ? "chineseAnswer correct" : "correct answer"}>
            <h2 className="correctH2">{t("A5title")}</h2>
            <p className="correctH2">{t("A5para")}</p>
          </div>
        </Link>
      )}
      <div className={props.class} >
        <button onClick={props.handleClick}>{props.text}</button>
      </div>
    </>
  );
};

export default Button;
