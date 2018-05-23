import React, { Component } from 'react'
import { Button, StyleSheet, Text, View} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeQuestion } from '../../actions'

class MultipleChoice extends Component {
  constructor() {
    super()
    this.state = {
      randomPlacement: 0,
      activeA: false,
      activeB: false,
      activeC: false,
      activeD: false,
      multipleChoice: []
    }
  }

  _pickAnswerA = () => {
    const { activeA, activeB, activeC, activeD } = this.state
    if(activeA === true || activeB === true || activeC === true || activeD === true) {
      this.setState({
        activeA: false,
        activeB: false, 
        activeC: false, 
        activeD: false,
       })
    }
    this.setState({
      activeA: true
    })
  }
  _pickAnswerB = () => {
    const { activeA, activeB, activeC, activeD } = this.state
    if (activeA === true || activeB === true || activeC === true || activeD === true) {
      this.setState({
        activeA: false,
        activeB: false,
        activeC: false,
        activeD: false,
      })
    }
    this.setState({
      activeB: true
    })
  }
  _pickAnswerC = () => {
    const { activeA, activeB, activeC, activeD } = this.state
    if (activeA === true || activeB === true || activeC === true || activeD === true) {
      this.setState({
        activeA: false,
        activeB: false,
        activeC: false,
        activeD: false,
      })
    }
    this.setState({
      activeC: true
    })
  }
  _pickAnswerD = () => {
    const { activeA, activeB, activeC, activeD } = this.state
    if (activeA === true || activeB === true || activeC === true || activeD === true) {
      this.setState({
        activeA: false,
        activeB: false,
        activeC: false,
        activeD: false,
      })
    }
    this.setState({
      activeD: true
    })
  }

  componentWillMount() {
    //add the logic in here
    const { index } = this.props.questionIndex
    const { categoryData } = this.props.categoryData

    this.setState(
      {
        randomPlacement: Math.floor(Math.random() * 2)
      },
      () => {
        const answerSet = categoryData.filter((answers, i) => i === index)
        const incorrect = answerSet[0].incorrect_answers
        const correct = answerSet[0].correct_answer
        incorrect.splice(this.state.randomPlacement, 0, correct)
        this.setState({ multipleChoice: incorrect })
      }
    )
  }

  renderMultipleChoice() {
    const { multipleChoice } = this.state
    return (
      <View>
        <Button
          title={multipleChoice[0]}
          onPress={this._pickAnswerA}
          color={this.state.activeA === true ? 'black' : 'red'}
        />
        <Button
          title={multipleChoice[1]}
          onPress={this._pickAnswerB}
          color={this.state.activeB === true ? 'black' : 'grey'}
        />
        <Button
          title={multipleChoice[2]}
          onPress={this._pickAnswerC}
          color={this.state.activeC === true ? 'black' : 'green'}
        />
        <Button
          title={multipleChoice[3]}
          onPress={this._pickAnswerD}
          color={this.state.activeD === true ? 'black' : 'blue'}
        />
      </View>
    )
  }
  shouldComponentUpdate(nextState) {
    return this.state.multipleChoice !== nextState.multipleChoice
  }

  render() {
    return (
      <View>
        {this.state.multipleChoice.length > 0 && this.renderMultipleChoice()}
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
