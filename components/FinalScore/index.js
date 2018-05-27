import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import HomeScreen from '../../screens/HomeScreen'

class FinalScore extends Component {
  _mainMenu = () => {
    this.props.navigate.navigate('HomeScreen')
  }

  // _bookPress = () => {
  //   const bookId = 10
  //   this.props.resetCategoryData()
  //   this.props.resetScore()
  //   this.props.resetIndex()
  //   this.props.fetchCategoryRequest(bookId)
  //   this.props.navigation.navigate('Trivia')
  // }

  

  render() {
    const { id } = this.props.id
    const { score } = this.props.score
    return <View>
        <Text>Final Score: {score}</Text>
        <Button title="Restart Game"/>
        <Button title="Back to Menu" onPress={this._mainMenu} />
      </View>
  }
}

mapStateToProps = state => {
  return {
    score: state.scoreReducer,
    id: state.idReducer
  }
}

export default connect(mapStateToProps)(FinalScore)
