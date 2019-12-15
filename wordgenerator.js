import React, { Component } from 'react';
import { TouchableNativeFeedback} from 'react-native';
import { Card, CardItem, Body, Text} from 'native-base';


export default class WordGenerator extends Component {

 constructor(props) {
    super(props);
    this.state = {currentletter: props.initialtext}
    this.onclick = this.onclick.bind(this);
  }
  onclick(){ 
    const index = this.props.wordselector();
    const newString = this.props.words[index]; 
    this.setState({currentletter: newString})
  }
  render(){
    return ( 
        <TouchableNativeFeedback onPress={this.onclick}>
        <Card>
            <CardItem header><Text>{this.props.title}</Text></CardItem>
            <CardItem>
                <Body>
                    
                        <Text>{this.state.currentletter}</Text>
                
                </Body>
            </CardItem>
        </Card> 
        </TouchableNativeFeedback>
    );
  }
}

