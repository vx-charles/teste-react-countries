import React from 'react'

// CSS
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Menu from './template/Menu'
import { BrowserRouter } from 'react-router-dom'
import Content from './template/Content'


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu />
                <Content />
            </BrowserRouter>
        </div>
    )
}

export default App
