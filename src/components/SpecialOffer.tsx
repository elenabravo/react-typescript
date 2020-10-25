import React from 'react'
import { Pizza } from '../types'
import SpecialOfferCSS from './SpecialOffer.module.css'
import { WithAddToCartProps } from './AddToCart'

interface Props {
    pizza: Pizza
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
    const { name, description, price } = pizza

    return (
        <div className={SpecialOfferCSS.container}>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>${price}</p>
            <WithAddToCartProps>
                {({ addToCart }) => (
                    <button type="button" onClick={() => addToCart({...pizza})}>
                        Add to cart
                    </button>
                )}
            </WithAddToCartProps>
        </div>
    )
}

export default SpecialOffer