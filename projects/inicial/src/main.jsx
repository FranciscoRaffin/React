import React from 'react' //Importa React 
import ReactDOM from 'react-dom/client' //Importa ReactDOM 
// import Card from './assets/Card.jsx'//Importa el componente 
import './assets/index.css' //Importa la hoja de estilo
import { App } from './assets/App.jsx';

// Punto de entrada de la app <-- 

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <App />
)


/*

COMPONENTE: Funcion que permite crear un elemento
PascalCase 

*/