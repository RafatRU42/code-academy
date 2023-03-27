import React, { useState } from 'react';

const Navbar = () => {
    const [nightMode, setNightMode] = useState(false)


    const handleNightMode = () =>{
        setNightMode(!nightMode)
    }


    {
        nightMode? document.getElementById('root').classList.remove('day')
        :          document.getElementById('root').classList.add('day')
    }
    return (
        <div>
            this is navbar
            <button onClick={handleNightMode}>night Mode </button>
        </div>
    );
};

export default Navbar;