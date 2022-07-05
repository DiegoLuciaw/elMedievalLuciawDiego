import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, collection, doc } from "firebase/firestore";

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

export default appFirebase 