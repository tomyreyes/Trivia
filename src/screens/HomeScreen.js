import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchCategoryRequest, resetIndex, resetScore, resetTimer, resetCategoryData } from '../actions'
import Trivia from './Trivia';
import { bindActionCreators } from 'redux'

class HomeScreen extends Component {
  constructor() {
    super()
    this.state = {
      categoryChosen: false,
      id: null
    }
  }

  static navigationOptions = () => {
    title: 'Home'
  }
 
  shouldComponentUpdate(nextState) {
    return this.state.categoryChosen !== nextState.categoryChosen
  }

  _boardPress = () => {
    this.setState({
      categoryChosen: true,
      id: 16
    })
  }

  _bookPress = () => {
    this.setState({ categoryChosen: true, id: 10 })
  }

  _videoGamePress = () => {
    this.setState({ categoryChosen: true, id: 15 })
  }
  _easyPress = () => {
    this.setState({ categoryChosen: false })
    const { id } = this.state
    const difficulty = 'easy'
    this.props.resetCategoryData()
    this.props.resetScore()
    this.props.resetIndex()
    this.props.fetchCategoryRequest({ id, difficulty })
    this.props.resetTimer()
    this.props.navigation.navigate('Trivia')
  }
  _mediumPress = () => {
    this.setState({ categoryChosen: false })
    const { id } = this.state
    const difficulty = 'medium'
    this.props.resetCategoryData()
    this.props.resetScore()
    this.props.resetIndex()
    this.props.fetchCategoryRequest({ id, difficulty })
    this.props.resetTimer()
    this.props.navigation.navigate('Trivia')
  }

  _hardPress = () => {
    this.setState({ categoryChosen: false })
    const { id } = this.state
    const difficulty = 'hard'
    this.props.resetCategoryData()
    this.props.resetScore()
    this.props.resetIndex()
    this.props.fetchCategoryRequest({ id, difficulty })
    this.props.resetTimer()
    this.props.navigation.navigate('Trivia')
  }

  render() {
    return <View style={styles.wrap}>
        <Text h2>Geek Trials</Text>
      {!this.state.categoryChosen ? <View style={styles.container}>
            <Text h4>Choose a Game:</Text>
            <Button icon={{ name: 'casino' }} title="Board Games" onPress={this._boardPress} backgroundColor={'#0C4399'} buttonStyle={styles.button} />
            <Button icon={{ name: 'local-library' }} title="Books" onPress={this._bookPress} backgroundColor={'#E00015'} buttonStyle={styles.button} />
            <Button icon={{ name: 'videogame-asset' }} title="Video Games" onPress={this._videoGamePress} backgroundColor={'#66079B'} buttonStyle={styles.button} />
          </View> :   
        <View style={styles.container}>
            <Text h4>Select Difficulty:</Text>
            <Button title="Mild" onPress={this._easyPress} buttonStyle={styles.button} backgroundColor={'#F2B705'} />
            <Button title="Medium" onPress={this._mediumPress} buttonStyle={styles.button} backgroundColor={'#F28705'} />
            <Button icon={{ name: 'whatshot' }} title="Spicy" onPress={this._hardPress} buttonStyle={styles.button} backgroundColor={'#EF4403'} />
          </View>
        }
      </View>
  }
}

const styles = StyleSheet.create({
  wrap:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    button: {
      width: 140,
      marginVertical: 2
    },
});

mapStateToProps = state => {
  return {
    id: state.idReducer.id,
    difficulty: state.idReducer.difficulty
  }
}

mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCategoryRequest,
    resetScore,
    resetIndex,
    resetCategoryData,
    resetTimer
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen); //creates a prop that refers to our state or in this case action creator 

