import React, {Component} from "react";

// FlatList - virtulaization
// 1000 items to show, but it creates and display UI only the items
// it fits into display
import {View, FlatList, 
            Text, Button,
             StyleSheet,
            ActivityIndicator
            } from "react-native";

// component
import ProductWidget from "./ProductWidget";

export default class ProductList extends Component {

    // react -navigation (tab/page title)
    static navigationOptions = {
        title: "Product List"
    }

    constructor(props) {
        super(props);

        this._renderItem = this._renderItem.bind(this);
    }

    componentDidMount() {
        console.log(" product list mounted")
        
        //TODO: call to fetch the data from service
        // DONOT implement ajax calls here
        // why? Code maintenance
        // React is for presentation
        this.props.fetchProducts(); // trigger products data to be downloaded
    }

    _renderItem2({item}) {
        return (<View >
                    <Text>{item.name}</Text>
                    <Button title="+Cart" 
                            onPress= {() => this.props.addItem(item)}
                    >
                    </Button>
             </View>)
    }

    editProduct(id) {
        let navigation = this.props.navigation;
        navigation.navigate('ProductEdit',  {id: id});
    }   

    // called automatically by FlatList when user swipe
    // create and return a widget per product
    _renderItem({item}) {
        return (<ProductWidget item={item} 
                               addItemToCart={this.props.addItemToCart}

                               gotoEdit={(id) => this.editProduct(id)}
                  >

                </ProductWidget>
                )
    }

    _keyExtractor(item, index) {
        return item.id;
    }

   

    render() {
        let products = this.props.products || [];
        let loading = this.props.loading;
        console.log( "Products to render", products.length);
        
        if (loading) {
            return (
                <View>
                    <Text >Loading..</Text>
                    <ActivityIndicator >
                    </ActivityIndicator>
                </View>
            )
        }

        return (

            <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
             <View style={styles.leftHeaderContainer}>
                 <Text style={styles.logoText}>Products</Text>
             </View>
             <View style={styles.rightHeaderContainer}>
                  

            <Button 
                title="Cart" 
                color='#fff' 
                size={23} 
                onPress={()=> this.props.navigation.navigate("Cart", {title: 'Cart Page'})} 
                style={{padding:5}} />

             </View>
            </View>
            <View style={styles.contentContainer}>
                <FlatList 
                    data={products}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    >

                </FlatList>
            </View>
           </View>

  

           
                )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
       flex: 1,
       backgroundColor: '#F5FCFF',
       height: 24
    },
    headerContainer: {
       flex: 1,
       flexDirection: "row",
       justifyContent: "space-between",
       backgroundColor: "#075e54",
       alignItems:"center",
       paddingRight: 5
    },
    leftHeaderContainer: {
       alignItems: "flex-start",
       flexDirection: "row"
    },
    rightHeaderContainer: {
       alignItems: "flex-end",
       flexDirection: "row"
    },
    contentContainer: {
       flex: 6,
    },
    logoText: {
       color: "white",
       fontWeight: "bold",
       fontSize: 16,
       alignItems: "flex-start",
       marginLeft: 10
    },
   });