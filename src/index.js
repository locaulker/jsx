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

  return <input type="number" min={5} max={10} />
}

root.render(<App />)
