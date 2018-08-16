import React from "react";

import {View, Text} from "react-native";

export default function CartSummary(props) {
            console.log("cart summary render");

            // props are read only
            // error / we can't overwrite
            // we should not overwrite
            //this.props.amount = 1000;
            
            return (
                <View>
                    <Text> Amount {props.amount} </Text>
                    <Text> Total Items {props.totalItems} </Text>
                    <Text> Discount {props.discount} % </Text>
                </View>
            )
    }
