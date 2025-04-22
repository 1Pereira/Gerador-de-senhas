import { useState } from "react"

function App() {
  const [password, setPassword] = useState("")
  const [copy, setCopy] = useState("Copiar")

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const length = 12
    let newPassword = ""
    for (let i = 0; i < length; i++) {
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
      <button onClick={generate}>Gerar</button>
      <button onClick={copyText}>{copy}</button>
      <div>{password}</div>
    </div>
  )
}

export default App
