import React from 'react';

function Header() {
    return(
        <header>
            <h1 style={{color: 'white'}}>
                The Official Osrs Item Logger
                <span className="logoCrab" role="img">
                    ⚔️
                </span>
            </h1>
        </header>
    );
}

export default Header;