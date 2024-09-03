"use client";
import React, { useRef, useState } from "react";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleCustomize } from "@/ToggleSlice";
import { chnageConfig } from "@/utils/ConfigSlice";

export default function Customize({ show }) {
  const dispatch = useDispatch();

  const configPrompt = useSelector((store) => {
    return store?.config?.config;
  });

  let [configValue, setConfigValue] = useState();

  function chnageConfigByUser() {
    if (configValue) {
      dispatch(chnageConfig(configValue));
      dispatch(toggleCustomize());
    } else {
      dispatch(
        chnageConfig(
          ` Role: "You are an AI Virtual Assistant, similar to JARVIS from Iron Man." Tone: "Friendly and conversational." Format: "Provide a concise and straightforward answer without asking additional questions,"`
        )
      );
      dispatch(toggleCustomize());
    }
  }

  return (
    <>
      <div class="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className={style.wrapper}>
          <div className={style.container}>
            <span>How I Resond You?</span>
            <p
              onInput={(e) => {
                setConfigValue(e.target.innerText);
              }}
              contentEditable={true}
            >
              {configPrompt}
            </p>
            <div className="flex gap-2">
            <button className="bg-black" onClick={() => chnageConfigByUser()}>Save</button>
            <button onClick={()=>{
              dispatch(toggleCustomize())
            }} className="bg-red-500">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
