// First component

// default import
import React from 'react';

// named export and import
import {View, Text, Button, Alert} from 'react-native';


// React Navigation
import {createStackNavigator} from 'react-navigation';

import CameraExample from './CameraExample';
import Profile from "./Profile";
import Counter from "./Counter";


// Using Raw Redux API into React,Is Best practice? NO, 
// We should use React-Redux Library
 
// React Create object for Home component
// React calls render method of component
// Stateless component
export default class Home extends React.Component {

  static navigationOptions = {
    title: 'Home'
  }

  // member function for es6 class
  onButtonPress () {
    // alert
    Alert.alert("Hello React");
  }
 
  gotoPage = (name) => {
    // react-navigation, props
    this.props.navigation.navigate(name, {source: 'From Home', key: 'value2' })
  }
  // render, react keyword
  // create and return a virtual DOM
  // who shall call render? called by react-native
  render() {
    // Get value from store
    console.log('Home Render')

    // JSX View
     return (
       <View>

           <Text>Home</Text>
          <Text>Counter From Redux</Text>
          <Button title="Touch" 
              onPress={this.onButtonPress} ></Button>

          <Button title="Profile Page" 
              onPress={() => this.gotoPage("Profile")} ></Button>

          
          <Button title="Counter Page" 
              onPress={() => this.gotoPage("Counter")} ></Button>

          <Button title="About Page" 
              onPress={() => this.gotoPage("About")} ></Button>

          <Button title="Cart Tab" 
              onPress={() => this.gotoPage("Cart")} ></Button>

          <Button title="MyWeb" 
              onPress={() => this.gotoPage("MyWeb")} ></Button>

       </View>
     ) 

    //  // Babel convert JSX to Raw JS View
    //  // Difficult to write this
    //  return React.createElement(
    //   View,
    //   null,
    //   React.createElement(
    //           Text,
    //           null,
    //           "Home"
    //   ),
    //   React.createElement(Button, { title: "Touch", onPress: this.onButtonPress })
    // )
  }

}
