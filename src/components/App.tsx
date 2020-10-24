import React from 'react'
import pizzas from '../data/pizzas.json'
import AppCSS from './App.module.css'
import AppSateProvider from './AppState'
import PizzaSVG from '../svg/pizza.svg'
import Cart from './Cart'
import SpecialOffer from './SpecialOffer'
import Pizza from './Pizza'

const App = () => {
const specialOfferPizza = pizzas.find(pizza => pizza.specialOffer)
    return (
        <AppSateProvider>
            <div className={AppCSS.container}>
                <div className={AppCSS.header}>
                    <PizzaSVG width={120} height={120} />
                    <h1 className={AppCSS.siteTitle}>Delicious Pizza</h1>
                    <Cart />
                </div>
                {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
                <ul className={AppCSS.pizzaList}>
                    {pizzas.map(pizza => (
                        <Pizza key={pizza.id} pizza={pizza}/>
                    ))}
                </ul>
            </div>
        </AppSateProvider>
    )
}

export default App