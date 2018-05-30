import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Badge } from 'react-native-elements'

class ScoreBoard extends Component {
  shouldComponentUpdate(nextProps){
    return this.props.score !== nextProps.score
  }

  render(){
    const { score } = this.props.score
    
    return(
      <View>
        <Badge value={`Score: ${ score }`}containerStyle={styles.badge}/>
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
    score: state.scoreReducer
  }
}

export default connect(mapStateToProps)(ScoreBoard)