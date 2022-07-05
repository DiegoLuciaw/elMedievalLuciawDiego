import { useState, useEffect } from "react"
import { ItemList } from "../compentes/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getItems } from "../services/firestore";


export default function ItemListContainer({title, description}) {

  const [Platos, setPlatos] = useState([])
  
  const { categoryId } = useParams()
  
  useEffect(() =>{

    getItems()
    .then((resolve) =>{
      setPlatos(resolve);
    }).catch((error) => {
      console.log(error);
    });
  }, [categoryId]);

    
  return (<>

    <h1 >BIENVENIDO AL MEDIEVAL</h1>
    
    <p> Cocina Castellana</p>

    
    <ItemList items = {Platos}/>
    
    </>
  )
}