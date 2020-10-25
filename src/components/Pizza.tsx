import React from 'react'
import PizzaCSS from './Pizza.module.css'
import { Pizza } from '../types'
import { useAddToCart } from './AddToCart'

interface Props {
    pizza: Pizza
}

const PizzaItem: React.FC<Props> = ({ pizza }) => {
    const { name, description, price } = pizza
    const addToCart = useAddToCart()
    const handleAddToCart = () => {
        addToCart({ ...pizza })
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

export default PizzaItem