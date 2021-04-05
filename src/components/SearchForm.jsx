import React, { Component } from 'react'
import '../css/SearchForm.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchAll } from '../store/actions/countryActions'
import Card from './Card'
import '../css/Card.css'
import replaceCharacters from 'replace-special-characters'
class SearchForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: ''
        }
        this.searchUpdated = this.searchUpdated.bind(this)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentDidMount() {
        this.props.searchAll()
        console.log('Inicializando...')
    }

    keyHandler(event) {
        if (event.key === 'Escape') {
            this.setState({ searchTerm: "" })
        }
    }

    searchUpdated(event) {
        this.setState({ searchTerm: event })        
    }

    render() {
        // console.log(this.props.query)
        const filteredCountries = this.props.query.filter(country => {
            return country.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        })

        return (
            <>
                <div className="col-xs-12">
                    <div role='form' className='search-form form-group'>
                        <input data-testid="form_search" className="form-control input-form" type="text" placeholder="Buscar País" value={this.state.searchTerm} onKeyUp={this.keyHandler} onChange={e => this.searchUpdated(e.target.value)} />
                    </div>

                </div>

                <div className="Cards">

                    { 
                        this.props.load === true ? 
                            <div className="loading">
                                <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i> Carregando países...                                
                            </div>
                        : "" 
                    }

                    {filteredCountries.map(dado => {
                        return (
                            <React.Fragment key={dado._id}>
                                <Card
                                    key={dado._id}
                                    src={dado.flag.country.flag.svgFile}
                                    name={dado.name}
                                    capital={dado.capital}
                                    area={dado.area}
                                    populacao={dado.flag.country.population}
                                    dominio={dado.flag.country.topLevelDomains || []}
                                    latitude={dado.location.latitude}
                                    longuitude={dado.location.longitude}
                                    caminhoCurtoPaises={dado.shortestPathToOtherCountry}
                                    url={process.env.PUBLIC_URL + "/details/" + replaceCharacters(dado.name.replaceAll(" ", "-").replaceAll(/[&\\#,+()$~%.'":*?<>{}]/g, ""))}>
                                </Card>
                            </React.Fragment>
                        )
                    })}
                </div>
            </>
        )

    }
}

const mapStateToProps = state => ({ load: state.country.load, query: state.country.query })
const mapDispatchToProps = dispatch => bindActionCreators({ searchAll }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)