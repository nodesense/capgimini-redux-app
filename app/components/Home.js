// First component

// default import
import React from 'react';

// named export and import
import {View, Text, Button, Alert} from 'react-native';

// Using Raw Redux API into React,Is Best practice? NO, 
// We should use React-Redux Library
 
// React Create object for Home component
// React calls render method of component
// Stateless component
export default class Home extends React.Component {

  // member function for es6 class
  onButtonPress () {
    // alert
    Alert.alert("Hello React");
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
          <Button title="Touch" onPress={this.onButtonPress} ></Button>
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
