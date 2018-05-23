import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

class ScoreBoard extends Component {
  shouldComponentUpdate(nextProps){
    return this.props.score !== nextProps.score
  }

  render(){
    const { score } = this.props.score
    
    return(
      <View>
        <Text>{score}</Text>
        </View>
    )
  }
}

mapStateToProps = state => {
  return {
    score: state.scoreReducer
  }
}

export default connect(mapStateToProps)(ScoreBoard)