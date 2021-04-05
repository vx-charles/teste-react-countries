import { useEffect, useState } from "react"

export const useFetch = (url, method = 'post') => {
    const [response, setResponse] = useState({
        data: null,
        loading: true
    })

    const text = sessionStorage.getItem('nome_pais') !== null ? `( name: "${sessionStorage.getItem('nome_pais')}" )` : ""

    useEffect(function () {
        fetch(url, {
            method: method,
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
        .then(resp => resp.json())
        .then(json => setResponse({
            data: json.data.Country,
            loading: false
        }))
    }, [url, method])

    return response
}