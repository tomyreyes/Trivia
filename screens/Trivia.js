import React, { Component }from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MultipleChoice from '../components/MultipleChoice'

class Trivia extends Component {

  renderQuestions(){
    const { categoryData } = this.props.categoryData
    return this.props.categoryData.categoryData.map((question, index)=>{
      return (
        <Text key={index} style={styles.question}>{question.question}</Text>
      )
    })
  }

  shouldComponentUpdate(nextProps){
    return this.props.categoryData !== nextProps.categoryData
  }

  render(){
    const { categoryData } = this.props.categoryData
  
      return(
        <View>
          {(categoryData.length !== 0) ? 
            this.renderQuestions() :
            <Text>Loading</Text>}
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
  question: {
    fontSize: 20
  }
});

mapStateToProps = state => { //subscribe to changes in the store 
  return {
    categoryData: state.categoryReducer
  }
}

Trivia.propTypes = {
  categoryData: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Trivia)
