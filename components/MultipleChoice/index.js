import React, { Component } from 'react'
import { Button, StyleSheet, Text, View} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeQuestion } from '../../actions'

class MultipleChoice extends Component {
  constructor(){
    super()
    this.state = {
      randomPlacement: 0,
      active: false,
      multipleChoice: []
    }
  }

  _pickAnswer = () => {
    this.setState({
      active: true
    })
  }

  componentWillMount() { //add the logic in here 
     
    this.setState({
      randomPlacement: Math.floor(Math.random() * 2),
    },()=> {
      const { index } = this.props.questionIndex
      const { categoryData } = this.props.categoryData
      const answerSet = categoryData.filter(((answers, i) => i === index)) //this will give me access to [index] answer set
      const incorrect = answerSet[0].incorrect_answers // I need to add the correct answer to this 
      const correct = answerSet[0].correct_answer
      incorrect.splice(this.state.randomPlacement, 0, correct)
      this.setState({multipleChoice: incorrect}) //this will fill the button group with correct answers each update.
    }) 
  }

  renderMultipleChoice(){
    const { multipleChoice } = this.state
    return (
      <View>
        <Button title={multipleChoice[0]} onPress={this._pickAnswer} color={(this.state.active === true) ? 'black' : 'red'}></Button>
        <Button title={multipleChoice[1]} color={'grey'}></Button>
        <Button title={multipleChoice[2]} color={'green'}></Button>
        <Button title={multipleChoice[3]}></Button>
      </View>
    )
  }
  shouldComponentUpdate(nextState){
    return this.state.multipleChoice !== nextState.multipleChoice
  }
  
  render(){
    return(
    <View>{this.state.multipleChoice.length > 0 &&
     this.renderMultipleChoice()
    }
     </View>
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
