import React, { Component } from 'react';
import { TouchableNativeFeedback} from 'react-native';
import { Card, CardItem, Body, Text} from 'native-base'
import * as data from '../alphabets'
import {random} from '../common'

export default class VowelsSound extends Component {
  state = { currentletter: 'Vowels' };
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
        <Card>
            <CardItem header><Text>Vowels</Text></CardItem>
            <CardItem>
                <Body>
                    <TouchableNativeFeedback onPress={this.onclick}>
                        <Text>{this.state.currentletter}</Text>
                    </TouchableNativeFeedback>
                </Body>
            </CardItem>
        </Card> 
    );
  }
}


