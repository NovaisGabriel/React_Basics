import React from 'react'
import ifs  from './if'

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <ifs test={usuario && usuario.nome}>
                Seja bem vindo {usuario.nome}
            </ifs>
        </div>
    )
}
