import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
    <div>
        <h1>Familia</h1>
        {/* Funcionamento igual ao metodo map do javascript */}
        {/* {React.Children.map(props.children,
            child => React.cloneElement(child, { ...props }))}
        } */}

        {childrenWithProps(props.children, props)}
    </div>
)