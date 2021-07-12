import React from 'react';

const Header = () => {
    return (
        <div>
            <a href="/" className="item">
                Accordion
            </a>
            <a href="/list" className="item">
                Search
            </a>
            <a href="/dropdown" className="item">
            dropdown
            </a>
            <a href="/translate" className="item">
            translate
            </a>
        </div>
    )
}

export default Header;