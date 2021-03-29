import React from 'react'
import SearchForm from './SearchForm'
import { render, waitFor } from '@testing-library/react'

describe('Tests for Country components', () => {
    it('Should search country when form has been inputted', async () => {

        const { getByTestId } = render(<SearchForm />)


        const fieldNode = await waitFor(
            () => getByTestId('form-field')
        )
        console.log(fieldNode)

    })
})