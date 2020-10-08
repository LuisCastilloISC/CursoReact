import React from 'react'

const Action = (props) => {
    return (
        <div>
            <button disabled = {!props.hasOptions} onClick = {props.HandelRandomPick}>What should I do?</button>
        </div>
    );
}

export {Action as default};