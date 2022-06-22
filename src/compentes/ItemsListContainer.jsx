import { useState, useEffect } from "react"
import { ItemList } from "../compentes/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { menu } from "../MenuList";


export default function ItemListContainer({title, description}) {

  const [Platos, setPlatos] = useState([])
  
  const { categoryId } = useParams()
  
  useEffect(() =>{
    const getMenu = new Promise((resolve, reject) =>{
      setTimeout(() =>{

        if(categoryId === undefined)
        resolve(menu);
    
        else{
            const itemsFound = menu.filter( item =>{
                return item.category === categoryId;
            })
            resolve(itemsFound);
        }

    }, 2000);
    });
    getMenu.then((resolve) =>{
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