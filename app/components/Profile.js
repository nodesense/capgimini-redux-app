import React from 'react';
import {View, 
        Text, 
        Button, 
        Alert, 
        Picker,
        Switch,
        Slider,
        StyleSheet
    } from 'react-native';

 
export default class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            language: 'js',
            proficiency: 70,
            employed: true
        }
    }

  static navigationOptions = {
    title: 'Profile'
    }
 
    componentWillUnmount() {
        Alert.alert('PRofile will be destroyed')
    }

    render() {
       
        return (
            <View style= { styles.container }>
                
                <Text>Language  {this.state.language}</Text>
                <Picker
                    selectedValue={this.state.language}
                    style={{ height: 200, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="Scala" value="scala" />
                    </Picker>

                    <Text>Proficiency {this.state.proficiency} </Text>
                     <Slider
                        step={1}
                        maximumValue={100}
                        onValueChange={( value ) => this.setState({proficiency: value})}
                        value={this.state.proficiency}
                    />

                     <Text>Employed? {this.state.employed? 'True': 'False' }</Text>
                    <Switch
                            onValueChange={( status ) => this.setState({employed: status})}
                            value={this.state.employed}
                        />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 20,
      flexDirection: 'column',
       
      
    },
  });
  