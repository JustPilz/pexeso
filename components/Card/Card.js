import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import FlipCard from 'react-native-flip-card';

class Card extends React.Component  {

  onClick = (item) => {
    this.props.onClick(this.props.item);
  }

  render() {
    const { item, imagesPos, source } = this.props;
    const { name, opened } = item;

    console.log(imagesPos)
    return <FlipCard
        style={card}
        friction={20}
        flipHorizontal={true}
        flipVertical={false}
        perspective={1000}
        flip={opened ? true : false}
        clickable={true}
        onClick={this.onClick}
      >
        <View>
          <Image style={image} source={require('@Images/card.jpg')} />
        </View>
        <View>
          <View style={imageContainer}>
            <Image source={source} style={[imageSprite, { left: -imagesPos }]} />
          </View>
        </View>
      </FlipCard>
  }

}

export default Card;

const {
  image,
  card,
  imageContainer,
  imageSprite
} = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
  },
  card: {
    width: 75,
    height: 75,
    maxWidth: 75,
    maxHeight: 75,
    minWidth: 75,
    minHeight: 75,
    margin: 5
  },
  imageContainer: {
    overflow: 'hidden',
    position: 'relative',
    height: 75,
    width: 75,
    backgroundColor: 'white'
  },
  imageSprite: {
    height: 75,
    width: 2025,
    position: 'absolute',
    top: 0,
    resizeMode: 'contain'
  }
});
