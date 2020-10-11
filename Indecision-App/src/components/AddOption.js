import React from 'react';

export default class AddOpcion extends React.Component
{       
    constructor(props)
    {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.state = {
            error: undefined
        }
    }

    onFormSubmit(e)
    {
        e.preventDefault();

        const op = e.target.elements.Option.value.trim();
        const error = this.props.HandleaddOption(op);
        e.target.elements.Option.value = '';
        this.setState(() => {
            return { error };
        });
        
    }

    render()
    {
        return (
            <div>
                {this.state.error ? <p className = "add-option-error">{this.state.error}</p> : undefined}
                <div>
                    <form className = "add-option" onSubmit={this.onFormSubmit}>
                        <input className = "add-option__input" type="text" name="Option"/>
                        <button className = "button">Add Option</button>
                    </form>
                </div>
            </div>
        );
    }
}