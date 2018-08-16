import {connect} from "react-redux";

import {bindActionCreators} from "redux";

import ProductList 
        from "../components/ProductList";

import * as actions from "../state/actions";

import {addItem} from "../../cart/state/actions";

//state = store.getState()

function mapReduxStateToReactProps (state) {
    return {
     //propName [react props]: value [from state]   
     products: state.productState.products,
     loading: state.productState.loading,
     cartSize: state.items.length
    }
}

function mapReduxDispatchToReactProps (dispatch) {
    return {
        //prop name
        //dispatch: dispatch,

        //aternative option 2

        //initProducts: (products) => dispatch(actions.initProducts(products)),
        //loading: (status) => dispatch(actions.loading(status))

        //alternative options 3

        //map all the actions with dispatch functionalities
        //create wrappers method for actions
 
        fetchProducts: function() {
            // to make async call in actions.js
            let actionFn = actions.fetchProducts();
            dispatch(actionFn);
        },

        actions: bindActionCreators(actions, dispatch),

        addItem: bindActionCreators(addItem, dispatch)
    }
}

//create container component
//get store from provider using context
//subscribe from store
//unsubscribe
let ProductListContainerComponent 
        = connect(mapReduxStateToReactProps,
                  mapReduxDispatchToReactProps) (ProductList);

export default ProductListContainerComponent;