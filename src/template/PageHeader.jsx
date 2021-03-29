import React from 'react'

const PageHeader = props => (
    <header className='page-header'>
        <h1>{props.title} <small style={{ fontSize: "50%" }}>{props.subtitle}</small></h1>
    </header>
)

export default PageHeader