import React, { Component } from 'react'
import '../css/SearchForm.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchAll } from '../store/actions/countryActions'
import SearchInput, { createFilter } from 'react-search-input'
import Card from './Card'
import '../css/Card.css'

class SearchForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: ''
        }
        this.searchUpdated = this.searchUpdated.bind(this)
    }

    componentDidMount() {
        this.props.searchAll()
        console.log('Inicializando...')
    }

    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }

    render() {
        
        const KEYS_TO_FILTERS = ['name']
        const filteredEmails = this.props.query.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

        return (
            <>
                <div className="col-xs-12">
                    <div role='form' className='search-form form-group'>
                        <SearchInput
                            data-testid="form-field"
                            className="form-control input-form"
                            onChange={this.searchUpdated}
                            placeholder="Buscar País" 
                        />
                    </div>
                </div>

                <div className="Cards">
                    {filteredEmails.map(dado => {
                        return (
                            <React.Fragment key={dado._id}>
                                <Card
                                    key={dado._id}
                                    src={dado.flag.country.flag.svgFile}
                                    name={dado.name}
                                    capital={dado.capital}
                                    area={dado.area}
                                    populacao={dado.flag.country.population}
                                    dominio={dado.flag.country.topLevelDomains || []}>
                                </Card>
                            </React.Fragment>
                        )
                    })}
                </div>            
            </>
        )
        
    }
}

const mapStateToProps = state => ({ query: state.country.query  })
const mapDispatchToProps = dispatch => bindActionCreators({ searchAll }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)