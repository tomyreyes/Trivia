import React, { Component }from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MultipleChoice from '../components/MultipleChoice'

class Trivia extends Component {

  renderQuestion(){
    const { index } = this.props.questionIndex
    const { categoryData } = this.props.categoryData
    let oneQuestion = categoryData.filter((question, i) => i === index) 

    return (
      <Text style={styles.question}>{oneQuestion[0].question}</Text>
    )
  }

  shouldComponentUpdate(nextProps){
    return this.props.categoryData !== nextProps.categoryData
  }

  render(){
    console.log(this.props)
    const { categoryData } = this.props.categoryData
  
      return(
        <View>
          {(categoryData.length > 0) ? 
            this.renderQuestion():
            <Text>Loading</Text>}
          {categoryData.length > 0 &&
            <MultipleChoice/>
          }
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
    categoryData: state.categoryReducer,
    questionIndex: state.questionReducer
  }
}

Trivia.propTypes = {
  categoryData: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Trivia)
