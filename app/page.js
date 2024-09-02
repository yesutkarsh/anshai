"use client"
import React, { useState } from "react";
const { GoogleGenerativeAI } = require("@google/generative-ai");
import {
  SearchingAnimation,
  SpeakingAnimation,
  StillAnimation,
} from "./Animation";
import Customize from "./Customize";
import { useDispatch, useSelector } from "react-redux";
import { toggleCustomize } from "@/ToggleSlice";

export default function page() {
  const [text, setText] = (useState("Hello sir, I am "))
  const [query, setQuery] = useState(null)


  // Gemini config
  const genAI = new GoogleGenerativeAI("AIzaSyB4O0zp-K7PxtMfxX9Cykfr_zn357O6WmQ");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  let GetAnswerFromGemini = async ()=>{
    setText("Searching")

    let prompt = `Question: ${query}, Role: "You are an AI Virtual Assistant, similar to JARVIS from Iron Man." Tone: "Friendly and conversational." Format: "Provide a concise and straightforward answer without asking additional questions, also use my name when answering if possible. About "My Name is Ansh and you are my buddy"`
    if(query){
      try{
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setText(text)
      }catch(error){
        console.log(error)
      }
    }
  }
  
  const toggle = useSelector((store)=>{
    return store?.toggle?.Customize
  })

  const dispatch = useDispatch()
  return (
    <>
      <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="wrapper">
          {text == "Searching"? <SearchingAnimation/>:<StillAnimation/>}
          <div>
            <span className="max-w-[700px] p-5">{text} </span>
            <select name="" id="">
              <option>JARVIS</option>
            </select>
          </div>
          <form className="form">
            <input onChange={(e)=>setQuery(e.target.value)} type="text" placeholder="Search Here" required/>
            <button type="submit" onClick={(e)=>{
              e.preventDefault()
              GetAnswerFromGemini()
            }}>
            <i class="ri-arrow-right-up-line"></i>
            </button>
          </form>
        </div>
      </div>

<div onClick={()=>{
  dispatch(toggleCustomize())
}} className="setting">
<i class="ri-settings-5-fill"></i>
Customize
</div>

{toggle?
<Customize/>
:""}

    </>
  );
}
