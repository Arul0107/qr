import React, { useState } from 'react'

const Cart = () => {
    const [cartCount, setCartCount] = useState(0);
    const handleClick =()=>setCartCount(cartCount+1);


    return (<>    <div>
        <h1>Number of items : {cartCount}</h1>
        <button className='g-btn' onClick={handleClick}>Add to Cart</button>
    </div>
    </>

    )
}

export default Cart
