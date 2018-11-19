import React from 'react'

function chidrenWithProps(props) {
    return   React.Children.map(props.children, child => {
        return React.cloneElement(props.children, 
            {...props, ...props.children.props
            })
    })
}

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>
           {chidrenWithProps(props) }
        </h2>
    </div>
