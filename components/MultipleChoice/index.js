import React, { Component } from 'react'
import { Button, StyleSheet, Text, View} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeQuestion } from '../../actions'

class MultipleChoice extends Component {
  renderMultipleChoice(){
    const { index } = this.props.questionIndex
    const { categoryData } = this.props.categoryData
    const answerSet = categoryData.filter(((answers, i) => i === index)) //this will give me access to [index] answer set
     
    const multipleChoice = answerSet[0].incorrect_answers // I need to add the correct answer to this 
    const correct = answerSet[0].correct_answer
    const randomPlacement = Math.floor(Math.random() * multipleChoice.length)

    multipleChoice.splice(randomPlacement, 0, correct) //adding correct answer at a random index
    return multipleChoice.map((choice, i) => {
      return ( <Text key={i}>{choice}</Text> 
    )
    })    
  }
  render(){
    return(
      this.renderMultipleChoice()
      
    )
  }
}

mapStateToProps = state => {
  return {
    categoryData: state.categoryReducer,
    questionIndex: state.questionReducer
  }
}

mapDispatchToProps = dispatch => { 
  return bindActionCreators({
    changeQuestion: changeQuestion
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MultipleChoice)
