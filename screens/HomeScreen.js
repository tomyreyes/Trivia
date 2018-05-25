import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchCategoryRequest, resetIndex, resetScore, resetCategoryData } from '../actions'
import Trivia from './Trivia';
import { bindActionCreators } from 'redux'

class HomeScreen extends Component {
  static navigationOptions = () =>{
    title: 'Home'
  }
  
  _bookPress = () => {
    const bookId = 10
    this.props.resetCategoryData()
    this.props.resetScore()
    this.props.resetIndex()
    this.props.fetchCategoryRequest(bookId)
    this.props.navigation.navigate('Trivia')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Select a Game</Text>
        <Button title="Books" onPress={this._bookPress}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20
  }
});

mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCategoryRequest: fetchCategoryRequest,
    resetScore: resetScore,
    resetIndex, resetIndex,
    resetCategoryData: resetCategoryData
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(HomeScreen); //creates a prop that refers to our state or in this case action creator 

