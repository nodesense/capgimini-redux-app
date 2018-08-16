import React, {Component} from "react";

import {View, Text, FlatList, ScrollView} from "react-native";

import CartItem from "../containers/CartItem";
 
export default function CartList(props) {
        // items should be passed from parent to child
        let items = props.items || [];
        console.log("cartlist render", items.length);
        
        return (
            <View>
                <Text>Cart List - {items.length}</Text>
 
                <ScrollView>

                    {
                        items.map ( item => (
                            <CartItem item={item} 
                                      key={item.id} 
                                      >
                            </CartItem>
                        ))
                    }

                </ScrollView>


            </View>
        )
    }
