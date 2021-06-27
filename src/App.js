import React from 'react';
import Accordion from './components/Accordion'

const items = [
    {
        title: 'What is React?',
        content: 'a front end js framework'
    },
    {
        title: 'What is React?',
        content: 'a favorite js library'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

export default () => {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    )
}