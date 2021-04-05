import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import configureStore from '../store/configureStore'
import { Provider } from 'react-redux'
import SearchForm from './SearchForm'
import PageHeader from '../template/PageHeader'
import { MemoryRouter } from 'react-router-dom'
import Card from './Card'

const store = configureStore()
const tagSearch = <Provider store={store}><SearchForm /></Provider>
const tagCard = <Provider store={store}><Card /></Provider>

describe('Testando documentos renderizados na página', () => {
    test('Renderizando a página inicial', () => {
        render(
            <PageHeader title="Homepage - Lista de Países do Mundo" />,
            { wrapper: MemoryRouter } // renderiza o código junto com os valores dos props
        )

        expect(screen.getByText(/Homepage/i)).toBeInTheDocument() // verifica se a palavra "Home" está na página carregada.
    })

    test('Carregando o form de pesquisa', () => {
        render(tagSearch) // renderiza o componente, o render retorna um objeto e com ela podemos pegar as funções dela.
        expect(screen.getByTestId('form_search')).toBeInTheDocument()
    })

    test('Teste de input de buscar país', () => {        
        render(tagSearch)
        
        const input = screen.getByTestId('form_search')
        fireEvent.keyDown(input, { value: "Brazil", key: 'Enter', code: 13 })  
    })

    test('Existência da lista de países',  () => {
        render(tagCard, { wrapper: MemoryRouter })
        screen.getByTestId("card_de_paises")  
    })

    test('Clicar em um país', () => {
        render(tagCard, { wrapper: MemoryRouter })
        fireEvent.click(screen.getByTestId("card_de_paises"))
    })

    afterEach(cleanup) // garantir que o DOM seja limpo entre os testes, para que cada um possa ser executado de forma independente

})