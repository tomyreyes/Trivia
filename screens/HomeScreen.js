import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = () =>{
    title: 'Home'
  }
  _bookPress(){
    const bookId = 10
    //when pressed need to dispatch an action which will then trigger saga to change state of store
    //want to also navigate to a different screen as well
    //dispatch({type: FETCH_CATEGORY, payload: id})
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Select a Game</Text>
        <Button title="Books" onPress={this._bookPress}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20
  }
});

export default HomeScreen

