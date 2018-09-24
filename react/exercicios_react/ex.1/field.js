import React, { Component } from 'react' // importa o react
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldActions'

class Field extends Component {//cria a classe e extende para o react
    render() {//todo componente deve ter o render
        return (
            <div>
                <label>{this.props.value}</label><br />
                <input onChange={this.props.changeValue} value={this.props.value} />
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}

function mapDispatchtoProps(dispatch) {
    return bindActionCreators({ changeValue }, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(Field)