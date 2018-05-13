import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import axios from 'axios'

export default class Trivia extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoading: true,
      questions: [],
      questionNumber: 0
    }
  }

  componentWillMount(){
    let { id } = this.props.navigation.state.params

    axios.get(`https://opentdb.com/api.php?amount=10&category=${id}`)
    .then(response => {
      this.setState({
        questions: response.data.results,
        
      })
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.questions !== this.state.questions){
      this.setState({
        isLoading: false,
        questions: this.state.questions
      })
    }
  }
  changeQuestion = () =>{
    this.setState({
      questionNumber: this.state.questionNumber + 1
    })
  }

  // MC ON PRESS FUNCTION
  // HIGHLIGHT THE BUTTON, CHANGE STATE OF CHOICE

  // SUBMIT ON PRESS FUNCTION
  //CHECK IF ANSWER IS RIGHT THEN CHANGE QUESTION

  render(){
    const { questions, questionNumber } = this.state
    const triviaQuestion = questions[questionNumber]

    // NEED ARRAY THAT CONTAINS MULTIPLE CHOICE 
       
if(this.state.isLoading) {
    return(
      <View>
        <Text>Loading</Text>
      </View>
    )
  }
  if(this.state.isLoading === false){
    return(
      <View>
      <Text>{triviaQuestion.question}</Text>
      <Button title="Change" onPress={this.changeQuestion}/>
      </View>
    )
  }
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

