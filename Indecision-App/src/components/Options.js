import React from 'react';
import Option from './Option'

const Opcions = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className = "widget-header__title">Your Options</h3>
                <button className="button button--link" onClick={props.HandelReset}>Remove All</button>
            </div>
            {props.options.length == 0? <p className = "widget-empty">Add an option please</p> : undefined}
            {
                props.options.map((option, index) => 
                    <Option 
                        key = {option} 
                        option = {option}
                        count = {index + 1}
                        HandleDeleteOption = {props.HandleDeleteOption} /> 
                   )
                }
        </div>
    );
}

export {Opcions as default};