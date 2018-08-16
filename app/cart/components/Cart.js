import React from "react";

import {View, Text, 
        Button, 
        StyleSheet,
        Slider
    } from "react-native";

import CartList from "../containers/CartList";
import CartSummary from "../containers/CartSummary";


export default function Cart(props) {

        console.log("-------------------------------------")
        console.log("cart render");
         
         
    return (
        <View style={styles.container}>
            <Text>Cart Redux</Text>

            <Button title="Logout"
                        onPress={() => props.logout()}
            />

            <Button title="Add"
                        onPress={() => props.addItem()}
            />
 
            <Button title="Empty"
                        onPress={() => props.actions.empty()}
            /> 


            <CartList />

            <CartSummary />

        </View>
)
    }



Cart.defaultProps = {
    title  : "Cart"
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F0F0'
     
    },
  });