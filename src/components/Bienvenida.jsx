import React from 'react'

const Bienvenida = (props) => {
  const { nombre } = props
  return (
    <div>
      <h1>Bienvenido {nombre}</h1>
    </div>
  )
}

export default Bienvenida;