/* eslint-disable react/jsx-key */
import { useState } from 'react';
//import { Children } from 'react';
//import { Madera, Palo, MesaCrafteo, PresurePlate } from './Items.jsx';
import './Craft2x2.css';
//import { Madera } from './Items';

export function Craft2x2() {    
    //const [cuadrilla, setCuadrilla] = useState([null,null,null, null])
    const [cuadrilla, setCuadrilla] = useState(Array(4).fill(null))
    const [out, setOut] = useState(null) 

    const updateCuadrilla = (index) => {
        console.log("update cuadr. ", index+1)
        const newCuadrilla = [ ... cuadrilla]
        

        if (!newCuadrilla[index] ) {
            newCuadrilla[index] = <Madera/>
        } else {newCuadrilla[index] = null}
        setCuadrilla(newCuadrilla)
        updateOut(newCuadrilla)
    }

    const updateOut = (cuadrilla) => {
        const newOut = crafteoCon(cuadrilla)
        setOut(newOut)

    }

    const Box = ({children, index}) => {
    
        

        const handleClick = () => {
            console.log('handle click')
            updateCuadrilla(index)

        }
    
        return (
            <div 
            key={index} 
            className='box'
            onClick={handleClick}
            > {children} </div>
        )  
    } 


    return (
        <main className='cft-interfaz'>
        <section className='tabla'>{
        cuadrilla.map( (_, index) => {
            return (<Box key={index} index={index}>{cuadrilla[index]}</Box>)
            }
        ) }
        </section>   
        <h1 className='flecha'>⇨</h1>
        <div className='out'>
        <Box id="out"> {out} </Box>
        </div>
        </main>      
    )
}


function crafteoCon(cuadrilla) {
    const crafteos = CRAFTEOS.map( crafteo => crafteo[1])    
    const crafteable = CRAFTEOS.map( crafteo => crafteo[0]) 
    console.log("cuadrilla entrada: ",cuadrilla)
    console.log("cuadrilla esperadas: ",crafteable)
    console.log("crafteos: ", crafteos)


    console.log("---------------")




    if (crafteos.includes(cuadrilla)) { //REVISAR MAL USO DE INCLUDES 
        console.log("AAAAAAAAAAAAAAAAAAAAAAA")
        console.log("#################")
        console.log(crafteable[crafteos.findIndex(cuadrilla)])
        return (crafteable[crafteos.findIndex(cuadrilla)])
    } else {
        console.log("Crafteo no detectado")
        //console.log("#################")
        return null
    }

}

const CRAFTEOS = [
    [<Palo/>,        [null, <Madera/>, null, <Madera/>]],
    [<Palo/>,        [<Madera/>, null, <Madera/>, null]],
    [<MesaCrafteo/>, [<Madera/>, <Madera/>, <Madera/>, <Madera/>]],
    [<PresurePlate/>,[null, null, <Madera/>, <Madera/>]],
    [<MesaCrafteo/>, [<Madera/>, <Madera/>, null, null]],
    [<MesaCrafteo/>, [null, null, null, null]]    
]






export function Madera() {
    return ( <img 
    className='item'
    src="https://gamepedia.cursecdn.com/minecraft_gamepedia/3/37/Oak_Planks_JE6_BE3.png" 
    alt="plank" />)
}


export function Palo() {
    return ( <img 
    className='item'
    src="https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/7/7a/Stick_JE1_BE1.png/150px-Stick_JE1_BE1.png?version=0bc06bbfffe51d4626be7ed6ec9f3b4b" 
    alt="palo" />)
}

export function MesaCrafteo() {
    return ( <img 
    className='item'
    src="https://media.forgecdn.net/attachments/7/664/pack.png" 
    alt="mesa_de_crafteo" />)
}


export function PresurePlate() {
    return ( <img 
    className='item'
    src="https://minecraft-max.net/upload/iblock/0bb/0bba80556f32b114c6023cbce2c1a27c.png" 
    alt="placa_de_presion" />)
}



//const cuadrilla=Array(4).fill(null)






