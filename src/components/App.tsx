import React from 'react'
import pizzas from '../data/pizzas.json'
import PizzaSVG from '../svg/pizza.svg'
import Pizza from './Pizza'
import Cart from './Cart'
import AppCSS from './App.module.css'
import AppSateProvider from './AppState'

const App = () => {
    return (
        <AppSateProvider>
            <div className={AppCSS.container}>
                <div className={AppCSS.header}>
                    <PizzaSVG width={120} height={120} />
                    <h1 className={AppCSS.siteTitle}>Delicious Pizza</h1>
                    <Cart />
                </div>
                <ul>
                    {pizzas.map(pizza => (
                        <Pizza key={pizza.id} pizza={pizza}/>
                    ))}
                </ul>
            </div>
        </AppSateProvider>
    )
}

export default App