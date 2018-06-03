import React, { Component } from 'react'
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { connect } from 'react-redux'
import HomeScreen from '../../screens/HomeScreen'
import { fetchCategoryRequest, fetchGifRequest, resetIndex, resetScore, resetTimer, resetCategoryData } from '../../actions'
import { bindActionCreators } from 'redux'

class FinalScore extends Component {

  _mainMenu = () => {
    this.props.navigate.navigate('HomeScreen')
  }

  _restartGame = () => {
    const { id } = this.props.id
    const { difficulty} = this.props.id
    this.props.resetCategoryData()
    this.props.resetScore()
    this.props.resetIndex()
    this.props.fetchCategoryRequest({id, difficulty})
  }

  componentWillMount(){
    const { score } = this.props.score
    let keyword = null
    if (score > 5) {
      keyword = 'champ'
    } else {
      keyword = 'fail'
    }
    this.props.fetchGifRequest(keyword)
  }

  shouldComponentUpdate(nextProps){
    return this.props.gif !== nextProps.gif
  }
  
  _renderGif(){
    const { gif } = this.props.gif
    return <Image style={{ width: 300, height: 250 }} source={{uri: gif}}/>
  }

  render() {
    const { score } = this.props.score
    const { gif } = this.props.gif
    return <View style={styles.container}>
        {gif !== null ? <View>
            <Text h2>Final Score: {score}</Text>
            {this._renderGif()}
            <Button title="Restart Game" onPress={this._restartGame} buttonStyle={styles.button} backgroundColor={'#5AAC56'} />
            <Button title="Back to Menu" onPress={this._mainMenu} buttonStyle={styles.button} backgroundColor={'#E00015'} />
          </View> : <ActivityIndicator size="large" color="#0000ff" />}
      </View>
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    paddingHorizontal: 20
  },
  button: {
    marginVertical: 3
  }
});

mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchCategoryRequest,
      fetchGifRequest,
      resetScore,
      resetIndex,
      resetTimer,
      resetCategoryData
    },
    dispatch
  )
}

mapStateToProps = state => {
  return {
    score: state.scoreReducer,
    id: state.idReducer,
    gif: state.gifReducer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinalScore)
