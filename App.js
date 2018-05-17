import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import Trivia from './screens/Trivia'
import { Provider } from 'react-redux'
import store from './store'

export default class App extends React.Component {

  render() {
    return( 
    <Provider store={store}>
    <MainNavigator/>
    </Provider>
    )
  }
}

const MainNavigator = new  createStackNavigator({
  HomeScreen: {screen: HomeScreen},
  Trivia: {screen: Trivia}
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 20
  }
});
