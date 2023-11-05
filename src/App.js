import ColorBox from "./ColorBox";
import Input from "./Input";
import { useState } from "react"


function App() {

  const [input, setInput] = useState("")

  return (

   <div className="container">
    <ColorBox 
    input={input}/>
    <Input  
    input={input}
    setInput={setInput}/>
  </div>

  )
  
}

export default App;
