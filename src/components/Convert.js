import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Convert = ({language, text}) => {

    useEffect(() => {
        axios.post('googletranslationapi', {}, {
            params: {
                q: text,
                target: language.value,
                key: 'api key'
            }
        })
    }, [language, text]) 

    return (
        <div>

        </div>
    )
}

export default Convert;