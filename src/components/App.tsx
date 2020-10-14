import React from 'react'
import Pizza from './Pizza'
import pizzas from '../data/pizzas.json'
import AppCSS from './App.module.css'
import PizzaSVG from '../svg/pizza.svg'

const App = () => {
    return (
    <div className={AppCSS.container}>
        <div className={AppCSS.header}>
            <PizzaSVG width={120} height={120} />
            <h1 className={AppCSS.siteTitle}>Delicious Pizza</h1>
        </div>
        <ul>
            {pizzas.map(pizza => (
                <Pizza key={pizza.id} pizza={pizza}/>
            ))}
        </ul>
    </div>
    )
}

export default App