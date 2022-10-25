import React from 'react'
import { menuHeading, menuFood } from './MenuPost';

const MenuContent = () => {
    return (
        <div className="menu-content">
            <h3>Minuman Dingin</h3>
            <h3>Minuman Panas</h3>
        </div>
    )
}
const MenuHeading = () => {
    return (
        <div className="menu-heading">
            {
                menuHeading.map((res, index) => {
                    return (
                        <ul key={index}>
                            <li><h3>{res.menuSub}</h3></li>
                            <li><p>{res.menuPrice}</p></li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

const MenuFood = () => {
    return (
        <div className="menu-content-food">
            <h3>Makanan Ringan</h3>
            <div className="menu-food">
                {
                    menuFood.map((menu, index) => {
                        return (
                            <ul key={index}>
                                <li> <h4>{menu.foodSub}</h4></li>
                                <li><p>{menu.foodPrice}</p></li>
                            </ul>
                        )
                    })
                }
            </div>
        </div>
    )
}
export { MenuHeading, MenuFood, MenuContent };
