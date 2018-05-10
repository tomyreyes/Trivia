import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Select a Game</Text>
        <Button
        title="Start"
        onPress={()=> this.props.navigation.navigate('Trivia')}/>
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

