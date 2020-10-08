import React from 'react';

const Option = (props) => {
    return(
        <div>
            {props.option}
            <button 
                onClick = {(e) => {
                    props.HandleDeleteOption(props.option);
                }}
            >
                Remove
            </button>
        </div>
    );
}

export {Option as default};