import { useState } from "react"
import Input from "./components/Input"

function App() {
  const [password, setPassword] = useState("")
  const [copy, setCopy] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(12)
  const [showInput, setShowInput] = useState(false)

  const customSize = showInput ? passwordSize : 8

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopy("Copiar")
  }

  function copyText() {
    window.navigator.clipboard.writeText(password)
    setCopy("Copiado")
  }
  return (
    <div className="app">
      <h1>Gerador de senhas!</h1>
      <div>
        <label htmlFor="showInput">Customizar tamanho:</label>
        <input
          type="checkbox"
          id="showInput"
          onChange={() => setShowInput(currentState => !currentState)}
        />
      </div>
      {showInput ? (
        <div>
          <label htmlFor="passwordSize">Tamanho: </label>
          <Input passwordSize={passwordSize}  setPasswordSize={setPasswordSize}/>
        </div>
      ) : null}
      <button onClick={generate}>Gerar senha de {customSize} caracteres</button>
      <button onClick={copyText}>{copy}</button>
      <div>{password}</div>
    </div>
  )
}

export default App
