import React, { Component } from 'react';

import { generate as id } from 'shortid'

import styled from 'styled-components'

class Chronometer extends Component {

    state = {
        hours:0,
        minutes:0,
        seconds:0,
        miliseconds:0
    }

    //Función que se llama con el boton start
    handleStartClick = () => {

    }

    //Conteo del cronómetro
    tick() {

    }

    //Función que se llama con el boton stop
    handleStopClick = () => {

    }

    //Función que se llama con el boton timestamp
    handleTimestamp = () => {

    }

    //Función que se llama con el boton reset
    handleReset = () => {

    }

    //Función de actualización del estado
    updateTimer(miliseconds, seconds, minutes, hours) {

    }

    addZero(value){
        return value < 10 ? `0${value}` : value
    }

    render() {
        let {hours, minutes, seconds, miliseconds} = this.state
        hours = this.addZero(hours)
        minutes = this.addZero(minutes)
        seconds = this.addZero(seconds)
        miliseconds = this.addZero(miliseconds)

        return (
            <h3>{`${hours} : ${minutes} : ${seconds} : ${miliseconds}`}</h3>
        )
    }
}

export default Chronometer;