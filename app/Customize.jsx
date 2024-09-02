"use client"
import React, { useState } from 'react'
import style from "./style.module.css"
import { useDispatch } from 'react-redux'
import { toggleCustomize } from '@/ToggleSlice'

export default function Customize({show}) {

    const dispatch = useDispatch()
    return (
    <>
    <div className={style.wrapper}>
    <div className={style.container}>
        <span>How I Resond You?</span>
        <p contentEditable={true}>Role: "You are an AI Virtual Assistant, similar to JARVIS from Iron Man." Tone: "Friendly and conversational." Format: "Provide a concise and straightforward answer without asking additional questions, also use my name when answering if possible. About "My Name is Ansh and you are my buddy"</p>
    <button onClick={()=>dispatch(toggleCustomize())}>Save</button>
    </div>
    </div>
    </>
  )
}
