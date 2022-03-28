import React, { useContext } from 'react'

// material css
import { FormControl, Select } from '@mui/material';

// currenctContext
import { CurrencyContext } from '../../Context/CurrencyProvider';
import { useSelector } from 'react-redux';

const DropdownButton = () => {

    const { setSelectValue, setSelectValue2, country, country2 } = useContext(CurrencyContext)

    const { currencyCounter } = useSelector((state) => state.ExchangeReducer)
    
    // console.log(currencyCounter, 'dropdown');

    return (
        <>

            <FormControl size='small' sx={{ width: "80px" }} onChange={(e) => setSelectValue(e.target.value)} >
                <Select native>
                    {
                        Object.keys(currencyCounter).map((value, index) => (
                            <option key={index} value={currencyCounter[value]}>{value}</option>
                        ))
                    }
                </Select>
            </FormControl>

            <h3>To</h3>

            <FormControl size='small' sx={{ width: "80px" }} onChange={(e) => setSelectValue2(e.target.value)}>
                <Select native>
                    {
                        Object.keys(currencyCounter).map((value, index) => (
                            <option key={index} value={currencyCounter[value]}>{value}</option>
                        ))
                    }
                </Select>
            </FormControl>

        </>
    )
}

export default DropdownButton