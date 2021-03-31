const URL = 'https://countries-274616.ew.r.appspot.com/'

// export const changeInput = event => ({
//     type: 'INPUTED',
//     payload: event.target.value
// })

export const search = () => { // para pesquisar tudo quando inicializar

    const text = `( name: "${sessionStorage.getItem('nome_pais')}" )`

    return dispatch => {
        fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                    query {
                        Country${text} {
                            _id
                            name
                            capital
                            area
                            convertedArea {
                                unit
                            }
                            flag {
                                country {
                                    population
                                    flag {
                                        svgFile
                                    }
                                    topLevelDomains {
                                        name
                                    }
                                }
                            }
                        }
                    }
                `
            }),
        })
        .then(res => res.json())
        .then(res => dispatch({ type: 'ONE_SEARCHED', payload: res.data.Country }))
    }
}


export const searchAll = () => { // para pesquisar tudo quando inicializar

    return dispatch => {
        fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                    query {
                        Country {
                            _id
                            name
                            capital
                            area
                            convertedArea {
                                unit
                            }
                            flag {
                                country {
                                    population
                                    flag {
                                        svgFile
                                    }
                                    topLevelDomains {
                                        name
                                    }
                                }
                            }
                        }
                    }
                `
            }),
        })
        .then(res => res.json())
        .then(res => dispatch({ type: 'SEARCHED', payload: res.data.Country }))
    }
}

export const getCountry = name => { // pegar o nome do país, para usar nos detalhes
    return { type: 'CLICKED', payload: name }
}
