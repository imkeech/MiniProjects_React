import { useState } from "react"
import "./Advice.css"

export const Advice = () => {
  const [Advice, setAdvice] = useState("Click the button below ");
  const [count, setCount] = useState(0);

  async function getAdvice(){
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    setAdvice(data.slip.advice)
    setCount((count) => count + 1)
  }

    return (
    <>
    <h3>"{Advice}"</h3>
    <button onClick={getAdvice}>Get Advice</button>
    <p>You have read <b>{count}</b> piece of advice</p>
    </>
  )
}
