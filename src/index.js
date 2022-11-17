import React from "react"
import ReactDOM from "react-dom/client"

const el = document.getElementById("root")

const root = ReactDOM.createRoot(el)

function App() {
  // let message = "Bye there!"

  // if (Math.random() > 0.5) {
  //   message = "Hello there!"
  // }

  // const name = "Samantha"
  // const age = 23

  const inputType = "number"
  const minValue = 5

  return <input type={inputType} min={minValue} />
}

root.render(<App />)
