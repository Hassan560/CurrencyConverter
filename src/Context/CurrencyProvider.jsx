import React, { createContext, useState } from 'react'

export const CurrencyContext = createContext()

const CurrencyProvider = ({ children }) => {

    const [input, setInput] = useState('')
    const [input2, setInput2] = useState('')
    const [selectValue, setSelectValue] = useState(1)
    const [selectValue2, setSelectValue2] = useState(1)
    const [country, setCountry] = useState([])
    const [country2, setCountry2] = useState([])

    return (
        <CurrencyContext.Provider value={{
            input,
            setInput,
            input2,
            setInput2,
            selectValue,
            setSelectValue,
            selectValue2,
            country,
            setCountry,
            country2,
            setCountry2,
            setSelectValue2
        }}>
            {children}
        </CurrencyContext.Provider>
    )
}

export default CurrencyProvider