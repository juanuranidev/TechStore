import React from 'react'
import { useCartContext } from '../../../Context/CarContext'
import './_CartItem.scss'

const CartItem = () => {
    const { cartList, removeItem } = useCartContext()

    return (
        <>  
        {cartList.map(prod =>
            <tr key={prod.id} className="itemCart">
                <td className="itemCart_td"><button className="itemCart_td_button" onClick={() => removeItem(prod.id)}><span className="fas fa-times" /></button></td>
                <td className="itemCart_td">image</td>
                <td className="itemCart_td itemName">{prod.name}</td>
                <td className="itemCart_td">${prod.price}</td>
                <td className="itemCart_td">{prod.quantity}</td>
                <td className="itemCart_td">${(prod.quantity * prod.price).toLocaleString('es')}</td>
            </tr>          
        )}
        </>    
    )
}

export default CartItem