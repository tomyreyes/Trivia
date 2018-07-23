import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeQuestion, changeScore, resetTimer } from '../../actions'

class MultipleChoice extends Component {
	constructor() {
		super()
		this.state = {
			randomPlacement: 0,
			activeA: false,
			activeB: false,
			activeC: false,
			activeD: false,
			multipleChoice: [],
			userAnswer: false,
			answer: false
		}
	}

	componentWillMount() {
		const { index } = this.props.questionIndex
		const { categoryData } = this.props.categoryData

		this.setState(
			{
				randomPlacement: Math.floor(Math.random() * 2)
			},
			() => {
				const answerSet = categoryData.filter((answers, i) => i === index)
				const incorrect = answerSet[0].incorrect_answers
				const correct = answerSet[0].correct_answer
				incorrect.splice(this.state.randomPlacement, 0, correct)
				this.setState(
					{
						multipleChoice: incorrect,
						answer: correct
					}
				)
			}
		)
	}

	_renderMultipleChoice() {
		const { multipleChoice } = this.state
		const choices = multipleChoice.map(choice => { //ensuring that we do not receive &#039; or &quot;
			return choice.replace(/&quot;/g, '"').replace(/&#039;/g, '').replace(/&amp;/g, '&')
		})
		console.log(this.state.answer)
		return <View>
			<Button title={choices[0]} buttonStyle={styles.button} onPress={() => this._pickAnswerA('a')} backgroundColor={'#0e6c68'} />
			<Button title={choices[1]} buttonStyle={styles.button} onPress={() => this._pickAnswer('b')} backgroundColor={'#b61b00'} />
			<Button title={choices[2]} buttonStyle={styles.button} onPress={() => this._pickAnswer('c')} backgroundColor={'#6680b7'} />
			<Button title={choices[3]} buttonStyle={styles.button} onPress={() => this._pickAnswer('d')} backgroundColor={'#50934b'} />
			<Button title={'SUBMIT'} buttonStyle={styles.button} onPress={this._checkAnswer} backgroundColor={'black'} />
		</View>
	}

	shouldComponentUpdate(nextProps, nextState) {
		const { multipleChoice, userAnswer } = this.state
		return multipleChoice !== nextState.multipleChoice || this.props.questionIndex !== nextProps.questionIndex || userAnswer !== nextState.userAnswer
	}

	componentDidUpdate(prevProps) { //this will change the multipleChoice questions that are rendered 
		const { index } = this.props.questionIndex
		const { categoryData } = this.props.categoryData

		if (this.props.questionIndex !== prevProps.questionIndex) {
			this.setState(
				{
					randomPlacement: Math.floor(Math.random() * 2)
				},
				() => {
					const answerSet = categoryData.filter((answers, i) => i === index)
					const incorrect = answerSet[0].incorrect_answers
					const correct = answerSet[0].correct_answer
					incorrect.splice(this.state.randomPlacement, 0, correct)
					this.setState(
						{
							multipleChoice: incorrect,
							answer: correct
						}
					)
				}
			)

		}
	}
	_pickAnswer = (button) => {
		const { activeA, activeB, activeC, activeD, multipleChoice } = this.state
		let stateKey = ''
		let newState = {}
		let userAnswer
		if (activeA === true || activeB === true || activeC === true || activeD === true) {
			this.setState({
				activeA: false,
				activeB: false,
				activeC: false,
				activeD: false,
			})
		}
		if (button === 'a') {
			stateKey = 'activeA'
			answer = multipleChoice[0]
		}
		else if (button === 'b') {
			stateKey = 'activeB'
			answer = multipleChoice[1]
		}
		else if (button === 'c') {
			stateKey = 'activeC'
			answer = multipleChoice[2]
		}
		else {
			stateKey = 'activeD'
			answer = multipleChoice[3]
		}
		let options = this.state[stateKey]
		newState[stateKey] = options
		newState[stateKey] = true
		this.setState(
			newState,
			userAnswer
		)
	}
	_checkAnswer = () => {
		const { userAnswer, answer } = this.state
		const { index } = this.props.questionIndex

		if (userAnswer == answer) {
			this.props.changeScore()
		} else { //I can insert something here to popup if its wrong? 
			console.log('better luck next time')
		}

		this.setState({ //when changing to next question remove toggled Button
			activeA: false,
			activeB: false,
			activeC: false,
			activeD: false
		})
		if (index > 9) {
			console.log('end of question set')
			//render homescreen 
		} else {
			this.props.changeQuestion()
			this.props.resetTimer()
		}
	}

	render() {
		return (
			<View>
				{this.state.multipleChoice.length > 0 && this._renderMultipleChoice()}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	button: {
		margin: 5
	}
});

mapStateToProps = state => {
	return {
		categoryData: state.categoryReducer,
		questionIndex: state.questionReducer
	}
}

mapDispatchToProps = dispatch => {
	return bindActionCreators({
		changeQuestion,
		changeScore,
		resetTimer
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MultipleChoice)
