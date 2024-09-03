"use client"
import Customize from "./Customize";
import { useDispatch, useSelector } from "react-redux";
import { toggleCustomize } from "@/ToggleSlice";
const { GoogleGenerativeAI } = require("@google/generative-ai");
import {
  SearchingAnimation,
  SpeakingAnimation,
  StillAnimation,
} from "./Animation";
import { useState } from "react";
import Animation1 from "./components/Animation1";

export default function AI() {
  const [text, setText] = (useState("Hey, How can I help you?"))
  const [query, setQuery] = useState(null)


  const configPrompt = useSelector((store) => {
    return store?.config?.config
  })


  // Gemini config
  const genAI = new GoogleGenerativeAI("AIzaSyB-Nvx2t8GXdCoB66ikO-Es5oIhcDqUJ9A");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  let GetAnswerFromGemini = async () => {
    setText("Searching")

    let prompt = `Question: ${query}, ${configPrompt || ` Role: "You are an AI Virtual Assistant, similar to JARVIS from Iron Man." Tone: "Friendly and conversational." Format: "Provide a concise and straightforward answer without asking additional questions,"`}"`
    if (query) {
      try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setText(text)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const toggle = useSelector((store) => {
    return store?.toggle?.Customize
  })

 


  const dispatch = useDispatch()


  return (
    <>
      <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="wrapper">
          {text == "Searching" ? <SearchingAnimation /> : <StillAnimation />}
          <div>
            <span className="text">{text} </span>
            {/* <select name="" id="">
              <option>JARVIS</option>
            </select> */}
          </div>
          <form className="form">
            <input onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search Here" required />
            <button type="submit" onClick={(e) => {
              e.preventDefault()
              GetAnswerFromGemini()
            }}>
              <i class="ri-arrow-right-up-line"></i>
            </button>
          </form>
        </div>
      </div>

      <div onClick={() => {
        dispatch(toggleCustomize())
      }} className="setting">
        <i class="ri-settings-5-fill"></i>
        Customize
      </div>

      {toggle ?
        <Customize />
        : ""}
    </>
  )
}
