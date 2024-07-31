import { createContext, useState, useReducer } from "react";
import {discountImages as Ditems} from '../products/Discounts/DiscountItems'

export const contextCard = createContext ({
    Items:[]
});

function shopingCartReducer(state,action){
    return state;
}

export default function ContextData({children}){
    const [shopingCartState, shopingCartDispatch] = useReducer(
        shopingCartReducer,
        Ditems
    );
    const [items, setItems] = useState(Ditems);
    const ctxValue = {
        Items: items
    };
    return (
        <contextCard.Provider value={ctxValue}>
            {children}
        </contextCard.Provider>
    )
}