import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// import default

import Home from './app/components/Home';
import Counter from "./app/components/Counter";

import Profile from "./app/components/Profile";

// import default is always alias name
 import Cart from "./app/cart/containers/Cart";

 import ProductList from "./app/product/containers/ProductList";

// Trying to integrate Provider with store, 
// so that containers can use store
// only one store per application
// multiple state maintained by reducers
import {Provider} from 'react-redux';
import store from "./app/store";

// React Navigation
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

function About() {
  return (
    <View style={ {marginTop: 200}}>
      <Text>About Page</Text>
    </View>
  )
}

const StackNavigation = createStackNavigator({
  Home: Home,
  Profile: Profile,
  Counter: Counter,
  About: About
})

import {connect} from 'react-redux';

//auth/components/Login.js
function Login(props) {
  return (
    <View>
      <Text style={ {height: 30}}>
        Welcome to Product App, Login First
      </Text>

      <Button onPress={props.login} title="Login">
      </Button>
    </View>
  )
}

//auth/containers/Login.js
let LoginContainer = connect(null,  // mapStateToProps
                             (dispatch) => {
                               return {
                                login: function() {
                                    dispatch({
                                      type: 'LOGIN'
                                    })
                                }
                               }
                             }
                        ) (Login);

//TabNavigation is a component
let TabNavigation = createBottomTabNavigator({
  Home: StackNavigation,
  'Counter': Counter,
  ProductList: ProductList,
  Cart: Cart,
  Profile: Profile
})

// App is parent component
// Home is a child component
 

// Sharing data from parent to child
// Props => properties/attributes

// child to parent communication
// JavaScript function callback

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to React Native</Text>

        {this.props.authenticated &&
                            <TabNavigation />
        }

        {
          !this.props.authenticated &&
                      <LoginContainer />
        }

        {/* 
        <Home />
        <Counter starter={100}  />  
        <Cart />
        */}
       

      </View>
    );
  }
}


//AppContainer.js
const AppContainer = connect((state) => {
  return {
    authenticated: state.authState.authenticated
  }
}, null) (App);

export default function AppProvider() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  ) 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
