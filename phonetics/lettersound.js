import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import * as data from '../alphabets'


export default class LettersSound extends Component {
  state = { currentletter: 'Click Me to start' };
 constructor(props) {
    super(props);
    this.onclick = this.onclick.bind(this);
  }
  onclick(){ 
    const letterSelector = parseInt(random(0, 26));
    newString = data.default.alphabets[letterSelector]; 
    this.setState({currentletter: newString})
  }
  render(){
    return ( 
      <TouchableNativeFeedback onPress={this.onclick}>
        <View style={{flex: 1, padding: 20, backgroundColor: 'white'}}>
            <Text style={styles.titleText}>{this.state.currentletter}</Text>
        </View>
    </TouchableNativeFeedback>  
    );
  }
}


const random = (min, max) => Math.random() * (+max - +min) + +min;
const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    flex: 1,
    justifyContent: 'center',
    fontSize:80,
    alignItems: 'center', 
    fontWeight: 'bold',
  },
});


