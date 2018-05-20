import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Trivia extends React.Component {

  // changeQuestion = () =>{
  //   this.setState({
  //     questionNumber: this.state.questionNumber + 1
  //   })
  // }

  render(){
  console.log(this.props)
    return(
      <View>
        <Text>Loading</Text>
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

mapStateToProps = state => { //subscribe to changes in the store 
  return {
    categoryData: state.categoryReducer
  }
}

Trivia.PropTypes = {
  categoryData: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(Trivia)
