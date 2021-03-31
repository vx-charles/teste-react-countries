import React from 'react'
import '../css/Card.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCountry } from '../store/actions/countryActions'

const Card = props => {

    const addLocalStorage = dado => {
        props.getCountry(dado)
        const nome = "name_" + dado
        sessionStorage.setItem(nome, dado)
        sessionStorage.setItem('dados_country_'+nome, JSON.stringify(props))
        sessionStorage.setItem('nome_pais', dado)
    }
    
    return (
        <div className="Card" onClick={() => addLocalStorage(props.name)} data-testid="card_de_paises">
            <Link to={props.url}>
                <img src={props.src} alt={props.name} />
                <div className="name-country">
                    <span><strong>Nome do País:</strong> {props.name}</span>
                    <span><strong>Capital:</strong> {props.capital}</span>
                </div>
            </Link>
        </div>
    )
}

const mapStateToProps = state => ({ countryName: state.country.countryName }) // "query" está vindo da store do arquivo reducers.js
const mapDispatchToProps = dispatch => bindActionCreators({ getCountry }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Card)