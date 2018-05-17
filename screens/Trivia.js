import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import axios from 'axios'

class Trivia extends React.Component {
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
    // const correctChoice = triviaQuestion.correct_answer
    // const incorrectChoices = triviaQuestion.incorrect_answers
    // const randomIndex = Math.floor(Math.random() * questions[questionNumber].incorrect_answers.length)
    // const multipleChoiceArr = incorrectChoices.splice(randomIndex, 0, correctChoice)
    // const { type } = questions[questionNumber]
  
    // NEED ARRAY THAT CONTAINS MULTIPLE CHOICE 
    // const multipleChoice = triviaQuestion.incorrect_answers.map(choice => {

    //   return <Button title={choice}/>
    // })
// if(this.state.isLoading) {
    return(
      <View>
        <Text>Loading</Text>
      </View>
    )
  // }
  // if(this.state.isLoading === false){
  //   return(
  //     <View>
  //     {/* <Text>{triviaQuestion.questionNumber}</Text> */}
  //       <Text>{triviaQuestion}</Text>
  //     {/* <Text>{type}</Text> */}
  //     {/* {multipleChoice} */}
  //     <Button title="Change" onPress={this.changeQuestion}/>
  //     </View>
  //   )
  // }
  // }
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

export default  Trivia
