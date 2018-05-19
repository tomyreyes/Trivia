import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
class Trivia extends React.Component {
  componentWillMount(){
    
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
  
    return(
      <View>
        <Text>Loading</Text>
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

export default Trivia
