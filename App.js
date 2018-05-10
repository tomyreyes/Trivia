import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }
  changeText = () => {
    this.setState({text: })
  }
  render() {
    return <View style={styles.container}>
        <TextInput onChange={this.changeText} />
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
