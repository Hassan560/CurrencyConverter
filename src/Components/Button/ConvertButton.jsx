import React, { useContext } from 'react'

// buttoncss
import styles from './ConvertButton.module.css'

// matarial ui
import { Button } from '@mui/material';

//currenctContext
import { CurrencyContext } from '../../Context/CurrencyProvider';

const ConvertButton = () => {

    const { selectValue, selectValue2, input, setInput2 } = useContext(CurrencyContext)

    const convert = (e) => {
        e.preventDefault()
        let currency = (selectValue2 / selectValue) * input
        setInput2(currency)
    }
    return (
        <div className={styles.btn}>
            <Button fullWidth style={{ backgroundColor: '#168aad', color: 'white' }} onClick={convert}>
                <h4>Converter</h4>
            </Button>
        </div>
    )
}

export default ConvertButton