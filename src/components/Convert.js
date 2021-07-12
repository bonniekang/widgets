import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Convert = ({language, text}) => {

    const [translated, setTranslated] = useState('')

    useEffect(() => {

        const doTranslation = async () => {
            const { data } = await axios.post('googletranslationapi', {}, {
                params: {
                    q: text,
                    target: language.value,
                    key: 'api key'
                }
            })
            setTranslated(data.data.translations[0].translatedText)
        }
        doTranslation();
    }, [language, text]) 

    return (
        <div>
            {translated}
        </div>
    )
}

export default Convert;