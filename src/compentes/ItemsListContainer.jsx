import { useState, useEffect } from "react"
import { ItemList } from "../compentes/ItemList/ItemList";
import { menu } from "../MenuList";


export default function ItemListContainer({title, description}) {

  const [Platos, setPlatos] = useState([])
  
  useEffect(() =>{
    const getMenu = new Promise((resolve, reject) =>{
      setTimeout(() =>{
        resolve(menu);
      }, 2000);
    });
    getMenu.then((resolve) =>{
      setPlatos(resolve);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

    
  return (<>

    <h1 >BIENVENIDO AL MEDIEVAL</h1>
    
    <p> Cocina Castellana</p>

    
    <ItemList items = {Platos}/>
    
    </>
  )
}