import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { menu } from "../../MenuList";


export default function ItemListContainer() {

    const [Plato, setPlato] = useState([])

    useEffect(() =>{
    const getMenu = new Promise((resolve, reject) =>{
        setTimeout(() =>{
        resolve(menu[0]);
        }, 2000);
    });
    getMenu.then((resolve) =>{
        setPlato(resolve);
    }).catch((error) => {
        console.log(error);
    });
    }, []);

    
    return (<>

    <h1 >BIENVENIDO AL MEDIEVAL</h1>
    
    <p> Cocina Castellana</p>

    <ItemDetail item= {Plato}></ItemDetail>
    
    </>
    )
}