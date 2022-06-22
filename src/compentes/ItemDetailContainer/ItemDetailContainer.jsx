import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { menu } from "../../MenuList";


export default function ItemListContainer() {

    const [Plato, setPlato] = useState([])

    const { id } = useParams();

    useEffect(() =>{
    const getMenu = new Promise((resolve, reject) =>{
        setTimeout(() =>{

            const itemFound = menu.find(item =>{
                return item.id === parseInt(id);
            });

        resolve(itemFound);
        }, 2000);
    });
    getMenu.then((resolve) =>{
        setPlato(resolve);
    }).catch((error) => {
        console.log(error);
    });
    }, [id]);

    
    return (<>

    <h1 >BIENVENIDO AL MEDIEVAL</h1>
    
    <p> Cocina Castellana</p>

    <ItemDetail item= {Plato}></ItemDetail>
    
    </>
    )
}