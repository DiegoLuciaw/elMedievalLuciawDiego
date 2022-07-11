import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, collection, doc, setDoc, addDoc, Timestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCY0ZxbPlg9sWb1_zUj4whR2_FPJFUw-og",
    authDomain: "elmedievaldiegoreact.firebaseapp.com",
    projectId: "elmedievaldiegoreact",
    storageBucket: "elmedievaldiegoreact.appspot.com",
    messagingSenderId: "934194916997",
    appId: "1:934194916997:web:06bf7dc077d6e5a06603ec"
};

const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);

export function testDatabase(){

    console.log(appFirestore);

}

export async function getItems(){

    const itemCollection = collection(appFirestore, "platos");
    const itemSnapshot = await getDocs(itemCollection);
    let respuesta = itemSnapshot.docs.map( doc => {

        return {
            ...doc.data(),
            id: doc.id
        }

    } )

    return respuesta;

}

export async function traerUnProducto(id) {
    const docRef = doc( appFirestore, "platos", id );
    const docSnapshot = await getDoc( docRef );

    return docSnapshot.data( {id: docSnapshot.id, ...docSnapshot.data()} )
    }

export async function exportDataToFirestore(){

    const productos = 
        [{
            "id": 1,
            "category": "Ensalada",
            "nombre": "Ensalada Mixta",
            "precio": 5,
            "foto": "../../fotos/ensaladaMixta.jpeg"
        }, {
            "id": 2,
            "category": "Plato",
            "nombre": "Chuleton de Avila c/ Patatas",
            "precio": 15,
            "foto": "../../fotos/chuleton-avila.jpg"
        }, {
            "id": 3,
            "category": "Plato",
            "nombre": "Chuleton de Avila",
            "precio": 10,
            "foto": "../../fotos/chuleton-de-avila.jpg"
        }, {
            "id": 4,
            "category": "Plato",
            "nombre": "Judias del Barco de Avila",
            "precio": 7,
            "foto": "../../fotos/Judías del Barco de Ávila.jpg"
        }]

    const itemCollection = collection(appFirestore, "platos");

    productos.forEach( item => {

        const newDoc = doc(itemCollection)

        setDoc(newDoc, item).then (res =>{

            console.log("Documento Guardado:", newDoc.id );

        })

        .catch( ( error => console.log("Error obteniendo los datos:", error))
        )

    })

}

export async function createBuyOrder( dataOrder ) {

    const orderCollectionRef = collection(appFirestore, "orders");

    const dateTimestamp = Timestamp.now();

    const dataOrderWithDate = {

        buyer: dataOrder.buyer,

        items: dataOrder.items,

        total: dataOrder.total,

        date: dateTimestamp

    };

    console.log(dataOrderWithDate);

    const orderCreated = await addDoc(orderCollectionRef, dataOrderWithDate);

    return orderCreated;

}

export default appFirebase