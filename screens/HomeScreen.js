import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';


const categories = [
  { category: 'Books', id: 10 },
  { category: 'Film', id: 11 },
  { category: 'Television', id: 14 },
]

export default class HomeScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      category: 0
    }
  }

  _onButtonPress = (e, id) =>{
    //id is returned as a string 
    let pressedCategory
    switch(id) {
      case '10':
      pressedCategory = 10
      Alert.alert('Books')
      break;
      case '11':
      pressedCategory = 11
      Alert.alert('Film')
      break;
      case '14':
      pressedCategory = 14
      Alert.alert('Television')
      break;
      default:
      Alert.alert('category does not exist yet')
    }
    this.setState({
      category: pressedCategory
    })
    //this.props.navigation.navigate('Trivia')
  }

  render() {
    const ButtonCategory = categories.map(cat =>{
      return <Button key={cat.id} title={cat.category} onPress={(e)=> this._onButtonPress(e, `${cat.id}`)}/>
    })
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Select a Game</Text>
        {ButtonCategory}
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

