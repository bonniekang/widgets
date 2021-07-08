import React from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

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

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'The color Blue',
        value: 'blue'
    }
]

export default () => {
    return (
        <div>
            <Search />
            <Dropdown options={options} />
        </div>
    )
}