import React from 'react'

// components
import Header from './Header';
import CurrencyInput from './CurrencyInput/CurrencyInput';

//material ui
import { Divider } from '@mui/material';

// app.css
import '../App.css';

const Currency = () => {
    return (
        <div className='container'>
            <div className='head'>
                <Header />
            </div>
            <Divider sx={{ borderWidth: 1 }} />
            <div className='content'>
                <CurrencyInput />
            </div>
        </div>
    )
}

export default Currency