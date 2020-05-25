import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {
    return (
        <div>
            <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}></FamiliaMembro>
            <FamiliaMembro nome="Gustavo" {...props}></FamiliaMembro>
            <FamiliaMembro nome="Elon" sobrenome="Silva"></FamiliaMembro>
        </div>
    )
}