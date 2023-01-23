import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React, {useState, useEffect} from "react";
import {Link, useParams } from "react-router-dom";
import listaProd from "./json/listaProd.json";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {idCategoria} = useParams();

 /* ACTUALIZAR BASE DE DATOS DE FIRESTORE */

 /*
        useEffect(()=>{
            const database = getFirestore();
            const itemsCollection = collection(database,"Productos");
            listaProd.forEach((documento)=>{
                addDoc(itemsCollection, documento);
            });
         },[]);
         
*/

/* CONSULTAR PROD. POR CATEGORIA*/

         useEffect(()=>{
            const database = getFirestore();
            const itemCollection = collection(database,"Productos");
           const q = idCategoria ?  query(itemCollection, where("Categoria","==", idCategoria)) : itemCollection; 
            getDocs(q).then((snapShot) =>{
                setItems(snapShot.docs.map((doc)=>({id:doc.id,...doc.data()})));  
            });
         },[idCategoria]);

    return (
        <div className="container py-5">
            <h1 className="text-left"> <img src="https://thumbs.dreamstime.com/b/dise%C3%B1o-de-banner-publicitario-horizontal-para-pizzer%C3%ADa-con-pizzas-e-ingredientes-sobre-fondo-color-plantilla-promoci%C3%B3n-215909875.jpg" alt="banner" width="1300" height="400"/></h1>
            <div className="row">
                <div className="col-md-12">  
                    <div className="row">
                        {     
                            items.map(item=>
                                <div className="col-md-3 mb-3" key={item.id}>
                                    <div className="card text-center"> 
                                        <Link to={/item/ + item.id} className="text decoration-none text-dark">
                                            <img src={item.Imagen} className="card-img-top" alt={item.Nombre} />
                                            <div className ="card-body"> 
                                                <p className="card-text">{item.Nombre}</p>
                                                <p className="card-text"><b>${item.Precio}</b></p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )       
                        }
                    </div>
                </div>
            </div>

            <footer className="text-center text-lg-start bg-light text-muted">

            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                <div className="me-5 d-none d-lg-block">
                <span>Contactanos en nuestras Redes!</span>
                </div>

            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">

                <div className="row mt-3">

                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                    <h6 className="text-uppercase fw-bold mb-4">
                        <i className="fas fa-gem me-3"></i>PIZZA TIME
                    </h6>
                    <p>
                        Lorem ipsumdolor sit amet, consectetur adipisicing elit.
                    </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                    <h6 className="text-uppercase fw-bold mb-4">
                        INFO.
                    </h6>
                    <p>
                        <a href="#!" className="text-reset">Contacto</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Pizzas</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Hamburguesas</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Locales</a>
                    </p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                    <h6 className="text-uppercase fw-bold mb-4">
                        Nuestras Redes!
                    </h6>
                    <p>
                        <a href="#!" className="text-reset">Facebook</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Instagram</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Twitter</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Youtube</a>
                    </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                    <p><i className="fas fa-home me-3"></i> Argentina</p>
                    <p>
                        <i className="fas fa-envelope me-3"></i>
                        info@example.com
                    </p>
                    <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                    <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                    </div>
                </div>
                </div>
            </section>

            <div className="text-center p-4">
                © 2021 Copyright:
                <a className="text-reset fw-bold" >PizzaTime</a>
            </div>

            </footer>

        </div>

    )
}

export default ItemListContainer;