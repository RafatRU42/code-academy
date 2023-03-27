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
            <p className='text-orange-700'>this is navbar</p>
            <p className='text-blue-700'>this is navbar</p>
            <p className='text-orange-700'>this is navbar</p>
            <button onClick={handleNightMode}>night Mode </button>
            <h1>this is h1 tag</h1>
        </div>
    );
};

export default Navbar;