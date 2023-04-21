import Head from "next/head";
import { title } from "process";
import { useState } from "react"

type questionState = "correct" | "wrong" | "current" | "normal";

export default function App() {
    let question: String = "A bird in the hand is worth two in the bush."
    const [answer, setAnswer] = useState("");
    function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(e.target.value)
    }
    function resetAnswer() {
      setAnswer("")
      // const input: React.ReactElement<HTMLInputElement> = document.getElementById("answerInput")
      // if (input !== null) {
      //   input.
      // }
    }
    return (
      <>
      <Head>
        <title>RNS Type</title>
      </Head>
        <div className="flex flex-col max-w-md p-4 gap-3">
            <div>
            <p className="w-full mx-2">{question}</p>
            </div>
            <div className="flex border-b-slate-200 border-2 rounded-md">
            <input id="answerInput" onChange={changeHandler} value={answer
            } type="text" className="grow mx-2 outline-none"/>
            </div>
            <div className="flex align-middle">
            <button className="border-2 px-5 py-1 text-center rounded-full mx-auto" onChange={resetAnswer}>reset</button>
            </div>
        </div>
        </>
  
    )
} 