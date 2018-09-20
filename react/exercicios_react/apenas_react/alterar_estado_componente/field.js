import React, { Component } from 'react' // importa o react

class Field extends Component {//cria a classe e extende para o react
    constructor(props) {
        super(props);
        this.state = { value: props.initialValue } //atribui o valor inicial para o value
        this.handleChange = this.handleChange.bind(this);//o this sempre ira apontar para class pois o js altera o referencial do this
    }

    handleChange(event) {//metodo resposavel para manipular quando houver uma mudança no field
        this.setState({ value: event.target.value })//quando disparado o evento ele pega a target e atribui o valor
    }

    render() {//todo componente deve ter o render
        return (
            <div>
                <label>{this.state.value}</label><br />
                <input onChange={this.handleChange} value={this.state.value} />
            </div >
        )
    }
}


export default Field