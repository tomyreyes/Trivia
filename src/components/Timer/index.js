import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { Text } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { changeQuestion } from '../../actions'

class Timer extends Component {
  constructor(){
    super()
    this.state = {
      time: 10
    }
  }

  timer = () => {
    const { time } = this.state
    if(time > 0) {
    this.setState({
      time: time - 1
    }) 
  } 
    else {
      this.props.changeQuestion()
      this.setState({
        time: 10
      })
  }
    
  }
  componentDidMount(){
    setInterval(this.timer, 1000)
  }

  render() {
    return (
      <View>
        <Text h4>{this.state.time}</Text>
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

mapDispatchToProps = dispatch => {
  return bindActionCreators({
    changeQuestion
  },dispatch)
}

export default connect(null, mapDispatchToProps)(Timer)