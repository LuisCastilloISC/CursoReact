import React from 'react';
import Option from './Option'

const Opcions = (props) => {
    return (
        <div>
            <button onClick={props.HandelReset}>Remove All</button>
            {
                props.options.map((option) => 
                    <Option 
                        key = {option} 
                        option = {option}
                        HandleDeleteOption = {props.HandleDeleteOption} /> 
                )
            }
        </div>
    );
}

export {Opcions as default};