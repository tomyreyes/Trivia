import React, { Component }from 'react';
import { ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MultipleChoice from '../components/MultipleChoice'
import ScoreBoard from '../components/ScoreBoard'
import FinalScore from '../components/FinalScore'
import Timer from '../components/Timer'

class Trivia extends Component {
  
  renderQuestion(){
    const { index } = this.props.questionIndex
    const { categoryData } = this.props.categoryData
    let oneQuestion = categoryData.filter((question, i) => i === index) 
    let question = oneQuestion[0].question.replace(/&quot;/g, '"').replace(/&#039;/g, '') //ensuring that we do not receive &#039; or &quot;
    return (
      <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      </View>
    )
  }

  shouldComponentUpdate(nextProps){
    return this.props.categoryData !== nextProps.categoryData || this.props.questionIndex !== nextProps.questionIndex
  }
 
  render(){
    const { categoryData } = this.props.categoryData
    const { index } = this.props.questionIndex
  
      return(
        <View>
         
          {(index < 9) ?
             (categoryData.length > 0) ?
             <View>
            <ScoreBoard />
            <Timer/>
            {this.renderQuestion()}
            </View>: 
              <ActivityIndicator size="large" color="#0000ff" />
           : <FinalScore navigate={this.props.navigation}/>
          }
            { ((categoryData.length > 0) &&(index < 9)) &&
            <MultipleChoice/>
        }
        
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    paddingHorizontal: 20
  },
  question: {
    fontSize: 20
  }
})

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
