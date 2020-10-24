import React from 'react'
import { Pizza } from '../types'
import SpecialOfferCSS from './SpecialOffer.module.css'
import { withAddToCart, AddToCartProps } from './AddToCart'

interface Props extends AddToCartProps{
    pizza: Pizza
}

const SpecialOffer: React.FC<Props> = ({ pizza, addToCart }) => {
    const { name, description, price } = pizza
    const handleAddToCart = () => {
        addToCart({ ...pizza })
    }

    return (
        <div className={SpecialOfferCSS.container}>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>${price}</p>
            <button type="button" onClick={handleAddToCart}>
                Add to cart
            </button>
        </div>
    )
}

export default withAddToCart(SpecialOffer)