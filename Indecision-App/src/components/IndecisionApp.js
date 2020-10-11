import React from 'react'
import AddOpcion from './AddOption';
import Opcions from './Options'
import Action from './Action.js';
import Header from './Header';
import OptionModal from './OptionModal.js';

class Indecisionapp extends React.Component
{
    state = {
        options: [],
        selectedOption: undefined
    }

    HandleClearSelectedOption = () =>
    {
        this.setState( () => ({
            selectedOption: undefined
        }));
    }

    HandelReset = () =>
    {
        this.setState( () => ({ options: [] }) );
        // () => {} funcion flecha con cuerpo de la funcion
        // () => {{}} funcion flecha devolviendo un objeto vacio
    }

    HandleDeleteOption = (otraOpcion) =>
    {
        this.setState( (prevState) => ({
            options: prevState.options.filter( (option) => {
                return otraOpcion !== option;
            })
        }));
    }

    HandelRandomPick = () =>
    {
         this.setState( () => ({
            selectedOption: this.state.options[(Math.floor(Math.random() * this.state.options.length))]
         })) ;
    }

    HandleaddOption = (option) =>
    {   if(!option)
        {
            return 'Enter valid value';
        }
        else
        {
            if(this.state.options.indexOf(option ) > -1)
            {
                return 'Already in';
            }
        }
        
        this.setState( (prevState) => {
            return {
                options : prevState.options.concat([option])
            };
        });
    }
    
    

    componentDidMount()
    {
        try
        {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options)
            {
                this.setState( () => ({options}));
            }
        }
        catch (e)
        {

        }
    }

    componentDidUpdate(prevProps, prevState)
    {
        if(prevState.options !== this.state.options)
        {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount()
    {

    }

    

    render()
    {
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header title = {title} subtitle = {subtitle} />
                <div className= "container">
                    <Action hasOptions = {this.state.options.length > 0 ? true : false} HandelRandomPick = {this.HandelRandomPick} />
                    <div className= "widget">
                        <Opcions options = {this.state.options} HandelReset = {this.HandelReset} HandleDeleteOption = {this.HandleDeleteOption}/>
                        <AddOpcion HandleaddOption = {this.HandleaddOption}/>
                    </div>
                </div>
                <OptionModal selectedOption = {this.state.selectedOption} ClearSelectedOption = {this.HandleClearSelectedOption}/>
            </div>
        );
    }
}

export {Indecisionapp as default};