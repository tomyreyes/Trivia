import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class Trivia extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoading: true,
      questions: []
    }
  }
  //componentWillMount
  componentWillMount(){
    let { id } = this.props.navigation.state.params
    return fetch(`https://opentdb.com/api.php?amount=10&category=${id}&type=multiple`)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.error(responseJson.results)
        this.setState({
          questions: responseJson.results,
          isLoading: false
        })
  })
  .catch(error => {
    console.error(error)
  })
}

  render() {
    return(
      <View><Text>Hi</Text></View>
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

