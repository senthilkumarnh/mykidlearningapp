import React from 'react';
import { Container, Header, Content, Left, Body, Right, Card, CardItem, Title, Text } from 'native-base';
import LettersSound from './phonetics/lettersound';
import TwoLettersSound from './phonetics/twolettersound';
import VowelsSound from './phonetics/vowelssound';
import * as Font from 'expo-font'

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
          
          <Card>
            <CardItem header>
              <Text>Letter Sounds</Text>
            </CardItem>
              <Body>
                <LettersSound></LettersSound>
              </Body>
            <CardItem>
            </CardItem>
          </Card>
          <Card>
          <CardItem header>
            <Text>2 Letter Words</Text>
          </CardItem>
            <Body>
              <TwoLettersSound></TwoLettersSound>
            </Body>
          <CardItem>
          </CardItem>
        </Card>
        </Content>
      </Container>
    );
  }
}