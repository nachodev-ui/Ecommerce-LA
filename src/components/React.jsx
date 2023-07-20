import { useState } from "react"

export default function React() {
  const [cliente, setCliente] = useState("Ignacio")

  console.log("Cliente y Servidor")

  return (
    <div>
      <h1>{cliente}</h1>
    </div>
  )
}
