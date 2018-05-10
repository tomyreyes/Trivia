import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class Trivia extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Trivia</Text>
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
