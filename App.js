import React from 'react';
import { Container, Header, Content, Left, Body, Right, Card, CardItem, Title, Text } from 'native-base';
import LettersSound from './phonetics/lettersound';
import TwoLettersSound from './phonetics/twolettersound';
import VowelsSound from './phonetics/vowelssound';
import * as Font from 'expo-font'
import * as alphabets from './alphabets'
import {random} from './common'
import WordGenerator from './wordgenerator';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    }); 
  }

  render() {
   

    return (
      <Container>
        <Header>
          <Left></Left>
          <Body>
            <Title><Text>Welcome Pranaav</Text></Title>
          </Body>
          <Right></Right>
        </Header>
        <Content>
          <WordGenerator title='Vowels' initialtext={alphabets.default.vowels[0]} words={alphabets.default.vowels} wordselector={() => parseInt(random(0, 5))}></WordGenerator>
          <WordGenerator title='Consonents' initialtext={alphabets.default.consonant[0]} words={alphabets.default.consonant} wordselector={() => parseInt(random(0, 20))}></WordGenerator>
          <WordGenerator title='Alphabets' initialtext={alphabets.default.alphabets[0]} words={alphabets.default.alphabets} wordselector={() => parseInt(random(0, 27))}></WordGenerator>
        </Content>
      </Container>
    );
  }
}

