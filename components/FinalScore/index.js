import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import HomeScreen from '../../screens/HomeScreen'

class FinalScore extends Component {
  _mainMenu = () => {
    this.props.navigate.navigate('HomeScreen')
  }

  

  render() {
    console.log('helloooo')
    console.log(this.props)
    const { score } = this.props.score
    return (
      <View>
        <Text>Final Score: {score}</Text>
        <Button title="Back to Menu" onPress={this._mainMenu} />
      </View>
    )
  }
}

mapStateToProps = state => {
  return {
    score: state.scoreReducer
  }
}

export default connect(mapStateToProps)(FinalScore)
