import React from 'react'
import '../css/Homepage.css'

const Homepage = props => {
    return (
        <div className="homepage">
            <p>Olá, neste site mostraremos algumas informações sobre os <b>países</b> do mundo.</p>
            <p>Acesse o <b>menu</b> ao lado para buscar informações básicas dos países.</p>
            <p>
                <b>Repositório no GitHub para mais informações do código: </b>
                <a rel="noreferrer" href="https://github.com/vx-charles/teste-react-countries/" target="_blank">https://github.com/vx-charles/teste-react-countries/</a>
            </p>
        </div>
    )
}

export default Homepage