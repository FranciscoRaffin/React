import { useState } from 'react'
import './App.css'
/*
  PARA CREAR UN PROYECTO:
  Abrir una terminal CMD en la carpeta de proyectos y 
  ejecutar "npm create vite@latest", despues pararse
  con el cmd dentro de la carpeta del proyecto y ejecutar 
  "npm install"
  PARA EJECUTAR:
  Abrir una terminal CMD en la carpeta del proyecto y 
  ejecutar "npm run dev".
*/

const [tablero, setTablero] = useState(Array(9).fill(null))
//const tablero = Array(9).fill(null)
//const [count, setCount] = useState(0)
//const Cuadrado = ({hijo, actualizarTablero, index }) => 

function App() {
  return (
    <main className='board'>
      <h1>Jsdsdws</h1>
      <section className='game'>
        {
          tablero.map( (_, index) => {
            return (
              <div className='cell'key={index}>
                <span className='cell_content'>
                  {index}
                </span>
              </div>
            )
          }) 
        }
      </section>
    </main>
  )
}    


export default App
