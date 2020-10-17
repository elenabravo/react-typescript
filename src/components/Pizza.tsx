import React, { useContext } from 'react'
import PizzaCSS from './Pizza.module.css'
import { useSetState } from './AppState'

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
    const setState = useSetState()
    const handleAddToCart = () => {
        setState(state => {
            const itemExists = state.cart.items.find(item => item.id === pizza.id)
            return {
            ... state, cart: {
                ...state.cart,
                items: itemExists ? state.cart.items.map(item => {
                    if  (item.id === pizza.id) {
                        return {...item, quantity: item.quantity + 1}
                    }
                    return item
                }) :[
                        ...state.cart.items,
                        {...pizza, quantity: 1}
                    ]
                }
            }
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