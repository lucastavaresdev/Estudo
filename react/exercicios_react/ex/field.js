import React, { Component } from 'react' // importa o react
import { connect } from 'react-redux'

class Field extends Component {//cria a classe e extende para o react

    render() {//todo componente deve ter o render
        return (
            <div>
                <label>{this.props.value}</label><br />
                <input onChange={this.handleChange} value={this.props.value} />
            </div >
        )
    }
}


function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}

export default connect(mapStateToProps)(Field)