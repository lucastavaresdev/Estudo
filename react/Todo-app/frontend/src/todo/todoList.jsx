import React from 'react';
import IconButton from '../template/iconbutton'
import { bindActionCreators } from 'redux'


import { connect } from 'react-redux'
import { markAsDone, markAsPadding, remove } from './todoActions'



const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ' '}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.markAsDone(todo)}>
                    </IconButton>
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.markAsPadding(todo)}>
                    </IconButton>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.remove(todo)}>
                    </IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
// o state todo vem do reducer.js
const mapStateToProps = state => ({ list: state.todo.list })
const mapDispachToprops = (dispatch) => bindActionCreators({ markAsDone, markAsPadding, remove }, dispatch)

export default connect(mapStateToProps, mapDispachToprops)(TodoList)
