import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-elements'
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
        <Text h2>Final Score: {score}</Text>
        <Button title="Restart Game" onPress={this._bookPress} buttonStyle={styles.button} backgroundColor={'#5AAC56'} />
        <Button title="Back to Menu" onPress={this._mainMenu} buttonStyle={styles.button} backgroundColor={'#E00015'} />
      </View>
  }
}


const styles = StyleSheet.create({
  button: {
    width: 140,
    margin: 3
  }
});

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
