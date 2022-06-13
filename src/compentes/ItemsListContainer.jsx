import ItemCount from "./ItemCount";

export default function ItemListContainer({title, description}) {


    
  return (<>

    <h1 >BIENVENIDO AL MEDIEVAL</h1>
    
    <p> Cocina Castellana</p>

    <ItemCount stock={10} initial={1} />
    
    </>
  )
}