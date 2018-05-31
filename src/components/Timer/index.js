import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { Text } from 'react-native-elements'

class Timer extends Component {
  constructor(){
    super()
    this.state = {
      time: 10
    }
  }

  timer = () => {
    const { time } = this.state
    if(time > 0) {}
    this.setState({
      time: time - 1
    })
  }
  componentDidMount(){
    setInterval(timer, 1000)
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

export default Timer