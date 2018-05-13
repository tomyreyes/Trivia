import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import axios from 'axios'

export default class Trivia extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoading: true,
      questions: []
    }
  }

  componentDidMount(){
    let { id } = this.props.navigation.state.params

    axios.get(`https://opentdb.com/api.php?amount=10&category=${id}`)
    .then(response => {
      this.setState({
        questions: response.data.results
      })
    })

  }
  
  render(){
    
    let trivia = this.state.questions.map(((quest, i) =>{
      return <Text key={i}>{quest.question}</Text>
    }))
    return(
      <View>
        <Text>Hey</Text>
        {trivia}
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

