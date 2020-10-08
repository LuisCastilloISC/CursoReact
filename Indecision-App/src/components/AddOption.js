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
                {this.state.error ? <p>{this.state.error}</p> : undefined}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="Option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}