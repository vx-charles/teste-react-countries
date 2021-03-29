import { useEffect, useState } from "react"

export const useFetch = (url, method = 'post') => {
    const [response, setResponse] = useState({
        data: null,
        loading: true
    })

    useEffect(function () {
        fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                    query {
                        Country {
                            name
                            capital
                            flag {
                                country {
                                    flag {
                                        svgFile
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