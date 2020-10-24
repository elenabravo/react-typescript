import React from 'react'
import PizzaCSS from './Pizza.module.css'
import { Pizza } from '../types'
import { withAddToCart, AddToCartProps } from './AddToCart'

interface Props extends AddToCartProps {
    pizza: Pizza
}

const PizzaItem: React.FC<Props> = ({ pizza, addToCart }) => {
    const { name, description, price } = pizza
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

export default withAddToCart(PizzaItem)