import React from "react";
import { FirstComponent } from "./FirstComponent";
import { CounterApp } from "./CounterApp";

// Mejora el renderizado ponerlo fuera de la funcion principal [solo para variables que no van a mutar]
const framework = "ReactJs";
const personalInformation = {
    id: 1,
    name: "Heber",
    lastname: "Cordova",
    age: 22
}

// shorcut: rafc
export const App = () => {
    return (
        <React.Fragment>
            {/* <h1>Hello from { framework }!</h1> */}
            {/* <h2>{ personalInformation }</h2> No se permite renderizar objetos */}
            {/* <h2>{ JSON.stringify(personalInformation) }</h2> */}
            {/* <FirstComponent title="Este es un titulo" /> */}
            <CounterApp initialValue={ 0 } />
        </React.Fragment>
    );
}