import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconbutton'

import { add, changeDescription, search } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search();
    }

    keyHandler(e) {
        const { add, description, search } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    render() {
        const { add, description, search } = this.props
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input type="text" id='description' className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={this.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={() => add(description)}>
                    </IconButton>
                    <IconButton style='info' icon='search'
                        onClick={() => search()}>
                    </IconButton>
                    <IconButton style='default' icon='close'
                        onClick={this.props.handleClear}>
                    </IconButton>
                </Grid>
            </div >
        )
    }

}



const MapStateToProps = state => ({ description: state.todo.description })
const MapDispatchToProps = dispatch =>
    bindActionCreators({ add, changeDescription, search }, dispatch)
export default connect(MapStateToProps, MapDispatchToProps)(TodoForm)
