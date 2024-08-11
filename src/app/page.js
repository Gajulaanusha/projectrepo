"use client"
import Image from "next/image";
import styles from "./page.module.css";
import {useState} from "react"
export default function Home() {
  const [cnt,setCnt]=useState(0)
  const fn=()=>{
    setCnt(cnt+1)
  }
  return <div>
    <h1>{cnt}</h1>
    <button onClick={fn()}>click</button>
  </div>
}
