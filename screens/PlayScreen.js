import React from 'react';
import { Button, View, Text } from 'react-native';
import { Audio } from 'expo';
import CardList from '@Components/CardList/CardList';
import BackgroundImage from '@Components/BackgroundImage/BackgroundImage';

export default class PlayScreen extends React.Component {

  static navigationOptions = {
    title: 'Игровое окно'
  };

  render() {
    console.log('Render PlayScreen')
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <BackgroundImage>
          <CardList />
        </BackgroundImage>
      </View>
    );
  }
}
