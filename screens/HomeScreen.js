import React from 'react';
import { Button, View } from 'react-native';
import BackgroundImage from '@Components/BackgroundImage/BackgroundImage';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Домашний экран'
  };

  render() {
    console.log('Render HomeScreen')
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <BackgroundImage>
          <Button
            title="PLAY"
            onPress={() => {
              this.props.navigation.navigate('Play')}
            }
          />
        </BackgroundImage>
      </View>
    );
  }
}

