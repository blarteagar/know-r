import React, {useState, useEffect} from 'react'

const Base = () => {
  const [nombre, setNombre] = useState('Pedro')

  useEffect ( ()=>{
    //Aquí puede llamarse a una API, o hacer cualquier acción, la cual se ejecutará una vez que todos los elementos DOM se hayan renderizado
    setTimeout(()=>{
      setNombre('Manuel')
    },2000)


  })
  return (
    <div>
      <h1>Página de Base ruta /</h1>
      {nombre}
    </div>
  )
}

export default Base
