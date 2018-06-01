import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { Text } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { changeQuestion, resetTimer, startTimer } from '../../actions'

class Timer extends Component {
  
  setTimer = () => {
    const { timer } = this.props.timer
    if(timer > 0) {
      this.props.startTimer()
    } else {
      this.props.changeQuestion()
      this.props.resetTimer()
    }
  }
  
  componentDidMount(){
    setInterval(this.setTimer, 1000)
  }
  
  componentWillUnmount(){
    clearInterval(this.setTimer)
  }

  render() {
    
    const { timer } = this.props.timer
    return (
      <View>
        <Text h4>{timer}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  badge: {
    margin: 3,
    alignSelf: 'flex-end'
  }
})

mapStateToProps = state => {
  return {
    timer: state.timerReducer
  }
}
mapDispatchToProps = dispatch => {
  return bindActionCreators({
    changeQuestion,
    resetTimer,
    startTimer
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)