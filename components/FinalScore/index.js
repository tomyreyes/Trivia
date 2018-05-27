import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import HomeScreen from '../../screens/HomeScreen'
import { fetchCategoryRequest, resetIndex, resetScore, resetCategoryData } from '../../actions'
import { bindActionCreators } from 'redux'

class FinalScore extends Component {

  _mainMenu = () => {
    this.props.navigate.navigate('HomeScreen')
  }

  _bookPress = () => {
    const { categoryId } = this.props.id
    this.props.resetCategoryData()
    this.props.resetScore()
    this.props.resetIndex()
    this.props.fetchCategoryRequest(categoryId)
  }

  

  render() {
    const { score } = this.props.score
    console.log(this.props)
    return <View>
        <Text>Final Score: {score}</Text>
        <Button title="Restart Game" onPress={this._bookPress}/>
        <Button title="Back to Menu" onPress={this._mainMenu} />
      </View>
  }
}

mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchCategoryRequest: fetchCategoryRequest,
      resetScore: resetScore,
      resetIndex,
      resetIndex,
      resetCategoryData: resetCategoryData
    },
    dispatch
  )
}

mapStateToProps = state => {
  return {
    score: state.scoreReducer,
    id: state.idReducer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinalScore)
