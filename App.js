import React from 'react';
import { StatusBar} from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from "./screens/HomeScreen"
import PlayScreen from "./screens/PlayScreen"

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Play: PlayScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack>
      <StatusBar hidden />
    </RootStack>;
  }
}
