import React, { Component } from 'react';
import { generate as id } from 'shortid'
import styled from 'styled-components'

const Button = styled.button`
    background-color: ${({ disabled }) => disabled ? 'transparent' : '#387EF5'};
    border: ${({ disabled }) => disabled ? '1px solid #387EF5' : 'none'};
    outline: none;
    border-radius: 15px;
    padding: .5rem;
    margin: .5rem;
    color: ${({ disabled }) => disabled ? '#444' : '#fff'};
`

class Chronometer extends Component {

    state = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        miliseconds: 0,
        running: false
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
        let {hours, minutes, seconds, miliseconds, running} = this.state
        hours = this.addZero(hours)
        minutes = this.addZero(minutes)
        seconds = this.addZero(seconds)
        miliseconds = this.addZero(miliseconds)

        return (
            <>
                <h3>{`${hours} : ${minutes} : ${seconds} : ${miliseconds}`}</h3>
                <Button disabled={running}> START </Button>
                <Button disabled={running}> STOP </Button>
                <Button disabled={running}> TIME STAMP </Button>
                <Button disabled={running}> RESET </Button>               
            </>
        )
    }
}

export default Chronometer;