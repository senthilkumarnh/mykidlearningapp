import React, { Component } from 'react';
import { TouchableNativeFeedback} from 'react-native';
import { Card, CardItem, Body, Text} from 'native-base';
import { random } from './common'

export default class WordGenerator extends Component {

 constructor(props) {
    super(props);
     
    const item = this.randomWordSelect(props.words); 
    this.state = {randomword: item.selectedword, availablewords: item.remainingwords};
    this.onclick = this.onclick.bind(this);
  }

  onclick(){ 

    const wordsList = this.state.availablewords;
    const item = this.randomWordSelect(wordsList);
  
    let remainingWordList = item.remainingwords;
 
    if(remainingWordList.length === 0){
      console.log('List is empty')
      remainingWordList = this.props.words;
    }
    
    this.setState({randomword: item.selectedword, availablewords: remainingWordList})
  }

  randomWordSelect(data){
    const index = parseInt(random(0, data.length -1)); 
    const selectedword = data[index];
    const remainingItems = [...data]
    remainingItems.splice(index, 1);
    return {
      'selectedword': selectedword,
      'remainingwords': remainingItems
    }; 
  }

  render(){
    return ( 
        <TouchableNativeFeedback onPress={this.onclick}>
          <Card>
              <CardItem header><Text>{this.props.title}</Text></CardItem>
              <CardItem>
                  <Body> 
                    <Text>{this.state.randomword}</Text>
                  </Body>
              </CardItem>
          </Card> 
        </TouchableNativeFeedback>
    );
  }
}

