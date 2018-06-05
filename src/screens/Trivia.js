import React, { Component }from 'react';
import { ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MultipleChoice from '../components/MultipleChoice'
import ScoreBoard from '../components/ScoreBoard'
import FinalScore from '../components/FinalScore'
import Timer from '../components/Timer'

class Trivia extends Component {
  _renderQuestion(){
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
    const quotes = ['Winter is coming', 'I demand a trial by combat', 'It does not do to dwell on dreams and forget to live', "What an incredible smell you've discovered", 'Do. Or do not. There is no try.', 'One does not simply walk into Mordor', 'Nobody tosses a Dwarf!', 'And Rohan will answer.']

    const names = ['Eddard Stark', 'Tyrion Lannister', 'Albus Dumbledore', 'Albus Dumbledore', 'Han Solo', 'Yoda', 'Boromir', 'Gimli', 'King Theoden']
    const random = Math.floor(Math.random() * quotes.length)
    const { categoryData } = this.props.categoryData
    const { index } = this.props.questionIndex
  
      return(
        <View style={styles.wrap}>
         
          {(index < 9) ?
            (categoryData.length > 0) ?
            <View style={styles.background}>
            <ScoreBoard />
            <Timer/>
            {this._renderQuestion()}
            </View> : 
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="#0000ff" />
              <Text>{quotes[random]}</Text>
              <Text style={styles.name}> - {names[random]}</Text>
              </View>
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
  wrap: {
    flex: 1,
    backgroundColor: '#FFF9A7'
  },
  container: {
    backgroundColor: '#FFF9A7',
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  question: {
    fontSize: 20
  },
  background: {
    backgroundColor: '#FFF9A7'
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  name :{
    fontStyle: 'italic'
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
