import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import Trivia from './screens/Trivia'
import { Provider } from 'react-redux'
import store from './store'

const MainNavigator = new createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home'
      }
    },
    Trivia: {
      screen: Trivia,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.category}`
      })
    }
  },
  {
    initialRouteName: 'HomeScreen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#7955CC'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)

class App extends Component {

  render() {
    return( 
      <Provider store={store}>
    <MainNavigator/>
    </Provider>
    )
  }
}
export default App
