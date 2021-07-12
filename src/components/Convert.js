import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Convert = ({language, text}) => {

    const [translated, setTranslated] = useState('')
    const [debouncedText, setDebouncedText] = useState(text)

    // useEffect1
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text)
        }, 500)

        return () => {
            clearTimeout(timerId)
        }
    }, [text])

    // useEffect2
    useEffect(() => {

        const doTranslation = async () => {
            const { data } = await axios.post('googletranslationapi', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'api key'
                }
            })
            setTranslated(data.data.translations[0].translatedText)
        }
        doTranslation();
    }, [language, debouncedText]) 

    return (
        <div>
            {translated}
        </div>
    )
}

export default Convert;