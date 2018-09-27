import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconbutton'

import { add, changeDescription, search, clear } from './todoActions'


class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search();
    }


    keyHandler(e) {
        const { add, clear, description, search } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search(description) : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }



    render() {
        const { add, description, search } = this.props
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input type="text" id='description' className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.description}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={() => add(description)}>
                    </IconButton>
                    <IconButton style='info' icon='search'
                        onClick={search}>
                    </IconButton>
                    <IconButton style='default' icon='close'
                        onClick={this.props.clear}>
                    </IconButton>
                </Grid>
            </div >
        )
    }

}



const MapStateToProps = state => ({ description: state.todo.description })
const MapDispatchToProps = dispatch =>
    bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(MapStateToProps, MapDispatchToProps)(TodoForm)

//----------------------------------------------------------------------------------------------->
