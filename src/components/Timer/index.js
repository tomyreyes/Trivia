import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { Text } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { changeQuestion, resetTimer, startTimer } from '../../actions'

class Timer extends Component {
  
  _setTimer = () => {
    const { timer } = this.props.timer
    if(timer > 0) {
      this.props.startTimer()
    } else {
      this.props.changeQuestion()
      this.props.resetTimer()
    }
  }
  
  componentWillMount(){
    this.props.resetTimer()
    this.intervalID =  setInterval(this._setTimer, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.intervalID)
  }

  render() {
    
    const { timer } = this.props.timer
    return (
      <View style={styles.container}>
        <Text h4>{timer}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    paddingHorizontal: 20
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