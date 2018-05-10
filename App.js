import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }
  render() {
    return 
    <View style={styles.container}>
        <TextInput onChangeText={(text)=>this.setState({text})} />
        <Text>{this.state.text}</Text>
      </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
