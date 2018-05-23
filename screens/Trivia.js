import React, { Component }from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MultipleChoice from '../components/MultipleChoice'
import ScoreBoard from '../components/ScoreBoard'

class Trivia extends Component {
  

  renderQuestion(){
    const { index } = this.props.questionIndex
    const { categoryData } = this.props.categoryData
    let oneQuestion = categoryData.filter((question, i) => i === index) 
    let question = oneQuestion[0].question.replace(/&quot;/g, '"').replace(/&#039;/g, '')

    return (
      <Text style={styles.question}>{question}</Text>
    )
  }

  shouldComponentUpdate(nextProps){
    return this.props.categoryData !== nextProps.categoryData || this.props.questionIndex !== nextProps.questionIndex
  }
 
  render(){
    console.log(this.props.questionIndex)
    const { categoryData } = this.props.categoryData
  
      return(
        <View>
          <ScoreBoard/>
          {(categoryData.length > 0) ? 
            this.renderQuestion():
            <ActivityIndicator size="large" color="#0000ff" />}
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

mapStateToProps = state => {
  return {
    categoryData: state.categoryReducer,
    questionIndex: state.questionReducer
  }
}

Trivia.propTypes = {
  categoryData: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Trivia)
