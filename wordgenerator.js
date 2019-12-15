import React, { Component } from 'react';
import { TouchableNativeFeedback} from 'react-native';
import { Card, CardItem, Body, Text} from 'native-base';
import { random } from './common'

export default class WordGenerator extends Component {

 constructor(props) {
    super(props); 
    this.state = {randomword: props.words, availablewords: props.words};
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

  renderWords(words){
    let elements = [];

    if(Array.isArray(words)){
      words.map(value => {
        const item = (<CardItem>
        <Body> 
          <Text>{value}</Text>
        </Body>
    </CardItem>);
  
          elements.push(item);
      });
    }
    else{
      const item = (<CardItem>
        <Body> 
          <Text>{words}</Text>
        </Body>
    </CardItem>);
  
          elements.push(item);
    }
    

    return elements;
  }
  render(){
    return ( 
        <TouchableNativeFeedback onPress={this.onclick}>
          <Card>
              <CardItem header><Text>{this.props.title}</Text></CardItem>
              {this.renderWords(this.state.randomword)}
          </Card> 
        </TouchableNativeFeedback>
    );
  }
}

