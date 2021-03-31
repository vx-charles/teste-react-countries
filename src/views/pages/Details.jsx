import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../css/Details.css'
import { search } from '../../store/actions/countryActions'
import { bindActionCreators } from 'redux'
class Details extends Component {
    constructor(props) {
        super(props)

        this.listMap = this.listMap.bind(this)
        this.alterarDados = this.alterarDados.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)

        this.state = {
            name: "",
            capital: "",
            area: "",
            populacao: "",
            dominio: [{name: ""}],
        }
    }

    componentDidMount() {
        this.props.search(sessionStorage.getItem('nome_pais'))
        console.log('Inicializando detalhes...')
    }    

    handleInputChange(event) {
        const target = event.target
        const value = target.type === 'text' ? target.value : target.checked
        const name = target.name

        this.setState({           
            [name]: name === 'dominio' ? [{name:value}] : value,
        })
    }

    alterarDados(nameCountry) {        
        if((this.state.capital && this.state.populacao && this.state.area && this.state.dominio) === "") {
            alert('Preencha todos os campos')
        } else {
            sessionStorage.setItem('dados_country_name_alterado_' + nameCountry, JSON.stringify(this.state))
            alert("alterações feitas!")
        }
    }

    listMap() {
        const nomePais = sessionStorage.getItem('nome_pais')
        let list = sessionStorage.getItem('dados_country_name_alterado_' + nomePais) === null ? sessionStorage.getItem('dados_country_name_' + nomePais) : sessionStorage.getItem('dados_country_name_alterado_' + nomePais)
        list = JSON.parse(list)
        // console.log(sessionStorage.getItem('dados_country_name_alterado_' + nomePais))
        // console.log(sessionStorage.getItem('dados_country_name_' + nomePais))
        // return list.map(dado => {
            // console.log(dado)
            return (
                <div id="details">
                    <div className="detail-country">                        
                        <img src={JSON.parse(sessionStorage.getItem('dados_country_name_' + sessionStorage.getItem('nome_pais'))).src} alt={list.name} />
                        <div className="description">
                            <h2>{list.name}</h2>
                            <p><strong>Capital:</strong> {this.state.capital === "" ? list.capital : this.state.capital}</p>
                            <p><strong>População:</strong> {this.state.populacao === "" ? list.populacao : this.state.populacao}</p>
                            <p><strong>Área:</strong> {this.state.area === "" ? list.area : this.state.area} mi2</p>
                            <p><strong>Domínio de primeiro nível com código de país:</strong> {this.state.dominio[0].name === "" ? list.dominio[0].name : this.state.dominio[0].name }</p>
                        </div>
                    </div>

                    <div className="alterar-form">
                        <div className="form-group">
                            <div className="info"><i className="fa fa-info-circle" aria-hidden="true"></i> Alterar informações do país (campos obrigatórios*)</div>
                            <div className="inputs">
                                <input type="text" className="form-control" placeholder="Capital*" name="capital" value={this.state.capital} onChange={this.handleInputChange} />
                                <input type="text" className="form-control" placeholder="População*" name="populacao" value={this.state.populacao} onChange={this.handleInputChange} />
                                <input type="text" className="form-control" placeholder="Área*" name="area" value={this.state.area} onChange={this.handleInputChange} />
                                <input type="text" className="form-control" placeholder="Domínio de primeiro nível*" name="dominio" value={this.state.dominio[0].name} onChange={this.handleInputChange} />
                            </div>
                            <button className="btn btn-primary btn-alterar" onClick={() => this.alterarDados(nomePais)}>Alterar dados</button>
                        </div>
                    </div>
                </div>
            )
        // })
    }

    render() {
        if (sessionStorage.getItem('nome_pais') !== null) { // Evita a tela de erro quando a sessionStorage está vazio.
            return this.listMap()
        } 
        else {
            return window.location.href = process.env.PUBLIC_URL + "/dashboard"
        }
    }
}

const mapStateToProps = state => ( // pega o estado atual armazenado no objeto lá no countryReducer.js
    {
        countryName: state.country.countryName,
        querySelected: state.country.querySelected
    }
)
const mapDispatchToProps = dispatch => bindActionCreators({ search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Details)