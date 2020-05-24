import './index.css'
import React from 'react'
import ReactDom from 'react-dom'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDom.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Segundo Componente"
            subtitulo = "Muito Legal!">
        </ComParametro>
    </div>,
    document.getElementById('root')
    )
