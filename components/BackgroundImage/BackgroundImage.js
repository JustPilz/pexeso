import React from 'react';
import { ImageBackground } from 'react-native';

const BackgroundImage = (props) => {
  return <ImageBackground
    source={require('@Bg/congruent_outline.png')}
    style={{ flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
    >
    {props.children}
  </ImageBackground>
}
export default BackgroundImage;
