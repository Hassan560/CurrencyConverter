import React, { useEffect, useContext } from 'react'

//redux
import { useDispatch, useSelector } from 'react-redux'

//material ui inputfield
import { TextField } from '@mui/material';

//css
import styles from './CurrencyInput.module.css'
import DropdownButton from '../DropDownButton/DropdownButton';
import ConvertButton from '../Button/ConvertButton';

// currenctContext
import { CurrencyContext } from '../../Context/CurrencyProvider';
// import axios from 'axios';

// redux action
import { getCurrencyConverter } from '../../Redux/Action/Index'

const CurrencyInput = () => {

    const { setInput, input, input2 } = useContext(CurrencyContext)

    const dispatch = useDispatch();

    const getData = () => {
        dispatch(getCurrencyConverter())
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className={styles.input}>
                <TextField
                    fullWidth
                    label="Amount"
                    type="number"
                    placeholder='Enter the amount'
                    size='small'
                    onChange={(e) => setInput(e.target.value)}
                    name="text"
                    value={input || ''}
                    autoComplete="off"
                />
            </div>
            <div className={styles.inputDrop}>
                <DropdownButton />
            </div>
            <div className={styles.input2}>
                <TextField
                    fullWidth
                    size='small'
                    name="text2"
                    value={input2 || ''}
                    autoComplete="off"
                />
            </div>
            <ConvertButton />
        </>
    )
}

export default CurrencyInput