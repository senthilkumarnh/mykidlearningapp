import React from 'react';
import { Container, Header, Content, Left, Body, Right, Card, CardItem, Title, Text } from 'native-base';
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
          <WordGenerator title='Vowels' words={alphabets.default.vowels}></WordGenerator>
          <WordGenerator title='Consonents' words={alphabets.default.consonant}></WordGenerator>
          <WordGenerator title='Alphabets' words={alphabets.default.alphabets}></WordGenerator>
        </Content>
      </Container>
    );
  }
}

