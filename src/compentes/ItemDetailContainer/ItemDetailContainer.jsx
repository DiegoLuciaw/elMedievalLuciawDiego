import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { traerUnProducto } from "../../services/firestore";


export default function ItemListContainer() {

    const [Plato, setPlato] = useState([])

    const { id } = useParams();

    useEffect(() =>{
        traerUnProducto(id)
        .then((resolve) =>{
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