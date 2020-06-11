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
        if(!this.state.running){
            this.interval = setInterval( () => {
                this.tick()
            }, 100)
        }
    }

    //Conteo del cronómetro
    tick() {
        let hours = this.state.hours
        let minutes = this.state.minutes
        let seconds = this.state.seconds
        let miliseconds = this.state.miliseconds + 1

        if (miliseconds === 10) {
            miliseconds = 0
            seconds = seconds + 1
        }

        if (seconds === 60) {
            seconds = 0
            minutes = minutes + 1
        }

        if (minutes === 60) {
            minutes = 0
            hours = hours + 1
        }

        this.updateTimer(hours, minutes, seconds, miliseconds)
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
    updateTimer(hours, minutes, seconds, miliseconds) {
        this.setState({
            hours:hours,
            minutes:minutes,
            seconds:seconds,
            miliseconds:miliseconds
        })
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
                <Button disabled={running} onClick={this.handleStartClick}> START </Button>
                <Button disabled={running}> STOP </Button>
                <Button disabled={running}> TIME STAMP </Button>
                <Button disabled={running}> RESET </Button>               
            </>
        )
    }
}

export default Chronometer;