import React, { useContext } from 'react'
import PizzaCSS from './Pizza.module.css'
import { useStateDispatch } from './AppState'

interface Pizza {
    id: number,
    name: string,
    description: string,
    price: number,
    quantity: number
}

interface Props {
    pizza: Pizza
}

const Pizza: React.FC<Props> = ({ pizza }) => {
    const { name, description, price } = pizza
    const dispatch = useStateDispatch()
    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: { item: {...pizza } }    
        })
    }

    return (
        <li className={PizzaCSS.container}>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>${price}</p>
            <button type="button" onClick={handleAddToCart}>
                Add to cart
            </button>
        </li>
    )
}

export default Pizza