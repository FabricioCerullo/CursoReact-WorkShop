import React, {useState, useEffect} from "react";
import {Link, useParams } from "react-router-dom";
import listaProd from "./json/listaProd.json";
import { addDoc, getFirestore, collection, doc, getDoc } from "firebase/firestore";
import Producto from "./Producto";

const ProductosGeneral = ()=>{
    const [item, setItem] = useState({});
    const {id} = useParams();

    /*CONSULTAR PROD. POR ID*/ 

     useEffect(()=>{
        const database = getFirestore();
        const documento = doc(database, "Productos", id);
        getDoc(documento).then((snapShot)=>{
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
            }else{
                
            }
        })

     },[]);
     
    return (
        <div className="row">
            {
               <div className="container">
                <Producto item={item}/>
               </div>
            }
        </div>
       
    )
}

export default ProductosGeneral;