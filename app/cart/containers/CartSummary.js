import {connect} from "react-redux";
//import { createSelector } from 'reselect'

import CartSummary from "../components/CartSummary";

//Good use reselect package for memorizing values


function recalculate(items) {
    console.log("RECALCULATE ", items)
    let amount = 0, 
        totalItems = 0;

    for(let item of  items) {
        amount += item.qty * item.price;
        totalItems  += item.qty; 
    }

    //TODO: calculate discount here
    let discount = 0;
    if (totalItems >= 5) {
        discount = 10;
    }

    return {
        amount, //ES6 sugar amount: amount
        totalItems,
        discount
    }
}

// reselect

// const itemsFilter = (state) => state.items
// const recalculateSelector = createSelector([itemsFilter],
//                                       (items ) => recalculate(items))

const mapStateToProps = (state) => {
    let result = recalculate(state.items);
    //let result = recalculateSelector(state);

    // old style
    return {
         amount: result.amount,
         totalItems: result.totalItems,
         discount: result.discount
    }
    //OR 
    //ES6
    //return {...result};
}

export default connect(mapStateToProps, 
                    null) (CartSummary)