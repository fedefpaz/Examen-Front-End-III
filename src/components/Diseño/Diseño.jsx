import React, {Component} from 'react';
import data from '../data.json';
import Historias from '../Historias/Historias';
import Botones from '../Botones/Botones';
import Historial from '../Historial/Historial';
import Swal from 'sweetalert2';

let historial = [];

export default class Diseño extends Component {
constructor(props) {
    super(props);
    this.state = {
        contador : 0,
        seleccionAnterior : ""
    }
}

componentDidUpdate(estadoPrevio){
    if(estadoPrevio.contador !== this.state.contador){
        historial.push(this.state.seleccionAnterior);
    }
}

handleClick = (element) => {
    const id = element.target.id;
    const contador = this.state.contador;
    const anterior = this.state.seleccionAnterior;

    if(contador >= 7){
        Swal.fire({
            title: "Fin",
            text: "¡Gracias por elegir tu propia aventura!",
            footer: "Prueba un camino distinto.",
            confirmButtonText: "Comenzar",
            background: "black",
            color: "white",
            confirmButtonColor: "grey"
        })
        //alert('Fin')
        this.setState({
            contador : 0,
        });
        historial = [];
    } else if(id === "A" && anterior !== "A"){
        this.setState(
            {contador: contador + 1, 
            seleccionAnterior: "A"
        });
    } else if(id === "A" && anterior === "A"){
        this.setState({
            contador: contador + 2,
            seleccionAnterior: "A"
        });
    } else if(id === "B" && anterior === "A"){
        this.setState({
            contador: contador + 3,
            seleccionAnterior: "B"
        });
    } else if(id === "B" && anterior === "B"){
        this.setState({
            contador: contador + 2,
            seleccionAnterior: "B"
        });
    } else if(id === "B"){
        this.setState({
            contador: contador + 2,
            seleccionAnterior: "B"
        });
    }
    console.log(historial);
    console.log(contador);
}

    render(){
        return(
            <>
            <Historias contador={[this.state.contador]}/>
            <Botones 
            handleClick = {this.handleClick}
            opcionA = {data[this.state.contador].opciones.a}
            opcionB = {data[this.state.contador].opciones.b}
            />
            <Historial
            seleccionAnterior = {this.state.seleccionAnterior}
            historial = {historial.map((historial, i)=>(
                <li key={i}>{historial}</li>
            ),
            data[this.state.contador]
            )}
            />
            </>
        )
    }
}