import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class Trivia extends React.Component {
  //componentWillMount
  //API call will occur here 
  

  //function to change question 



  render() {
    let id = this.props.navigation.state.params.id
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{id}</Text>
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

