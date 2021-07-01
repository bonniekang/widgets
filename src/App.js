import React from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search'

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
            <Search />
        </div>
    )
}