import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import CartItem from "../components/CartItem";
import * as actions from "../state/actions";

const mapDispatchToProps = (dispatch) => {
    return {
        // props.actions.removeItem, props.actions.updateItem
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(null, 
                    mapDispatchToProps) (CartItem)