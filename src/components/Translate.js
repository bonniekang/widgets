import React,  {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
]

const Translate = () => {

    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState("")

    return (
        <div>
            <div>
                <input value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <Dropdown label="Select a Language" language={language} setLanguage={setLanguage}  options={options} />
            <h3>Output</h3>
            <Convert text={text} language={language} />
        </div>
    )
}

export default Translate;