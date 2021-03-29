import '../css/Content.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PageHeader from './PageHeader'
import SearchForm from '../components/SearchForm'
import Details from '../views/pages/Details'
import Homepage from './Homepage'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <PageHeader title="Homepage - Lista de Países do Mundo" />
                <Homepage />
            </Route>

            <Route path="/dashboard">
                <PageHeader title="Dashboard" subtitle="Lista de países" />
                <SearchForm />
            </Route>

            <Route path="/details">
                <PageHeader title="Detalhes do País" />
                <Details />
            </Route>
            
            <Route path="*">
                <div><strong style={{ fontSize: "24px" }}>ERRO 404</strong></div>
                <div>Página não encontrada!!!</div>
            </Route>
        </Switch>
    </main>
)

export default Content