import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';



export default class App extends Component {
  state = { currentletter: '' };
 constructor(props) {
    super(props);
    this.onclick = this.onclick.bind(this);
  }
  onclick(){ 
    const random1 = random(0, 1);
    const vowelsSelector = parseInt(random(0, 4));
    const consonentsSelector = parseInt(random(0, 20))
    const currentVowel = vowels[vowelsSelector];
    const currentConsonent = consonents[consonentsSelector];
    let newString = '';

    if(random1 < 0.5){
      newString = `${currentConsonent}${currentVowel}`;
    }else{
      newString = `${currentVowel}${currentConsonent}`;
    }
    this.setState({currentletter: newString})
  }
  render(){
    return (
      <View style={{flex: 1}}>
      <TouchableNativeFeedback
              onPress={this.onclick}
              background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
              
              <View style={{flex: 1, padding: 20, backgroundColor: 'blue'}}>
              <Text style={styles.titleText}>{this.state.currentletter}</Text>
             </View>
                  
              </TouchableNativeFeedback>
      </View>
      
     
     
    );
  }
}

const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonents = ['b','c','d','f','g','h','j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v','w','x','y', 'z']
const random = (min, max) => Math.random() * (+max - +min) + +min;
const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    flex: 1,
    justifyContent: 'center',
    fontSize:800,
    alignItems: 'center', 
    fontWeight: 'bold',
  },
});


