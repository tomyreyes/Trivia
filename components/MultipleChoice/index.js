import React, { Component } from 'react'
import { Button, StyleSheet, Text, View} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeQuestion } from '../../actions'

class MultipleChoice extends Component {
  constructor(){
    super()
    this.state = {
      active: false
    }
  }

  _pickAnswer = () => {
    this.setState({
      active: true
    })
  }

  renderMultipleChoice(){
    const { index } = this.props.questionIndex
    const { categoryData } = this.props.categoryData
    const answerSet = categoryData.filter(((answers, i) => i === index)) //this will give me access to [index] answer set
     
    const multipleChoice = answerSet[0].incorrect_answers // I need to add the correct answer to this 
    const correct = answerSet[0].correct_answer
    const randomPlacement = Math.floor(Math.random() * multipleChoice.length)

    multipleChoice.splice(randomPlacement, 0, correct) //adding correct answer at a random index

    return (
      <View>
        <Button title={multipleChoice[0]} onPress = {this._pickAnswer} color={(this.state.active === true) ? 'black' : 'red'}></Button>
        <Button title={multipleChoice[1]} color={'grey'}></Button>
        <Button title={multipleChoice[2]} color={'green'}></Button>
        <Button title={multipleChoice[3]}></Button>
      </View>
    )

    // return multipleChoice.map((choice, i) => {
    //   return (
    //      <Text key={i}>{choice}</Text> 
    // )
    // })    
  }

  render(){
    console.log('herp')
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
