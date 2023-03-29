import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const messages = [
  'Você é incrível!',
  'Você pode realizar tudo o que deseja!',
  'Hoje é um bom dia para ser feliz!',
  'Você é mais forte do que pensa!',
  'Você é uma pessoa especial!'
];

class CookieApp extends Component {
  state = {
    cookieImage: require('./assets/biscoito.png'),
    message: ''
  }

  onCookiePress = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    this.setState({
      cookieImage: require('./assets/biscoitoQuebrado.png'),
      message: messages[randomIndex]
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.cookieImage} style={styles.cookieImage} />
        <TouchableOpacity style={styles.button} onPress={this.onCookiePress}>
          <Text style={styles.buttonText}>Quebre o biscoito!</Text>
        </TouchableOpacity>
        <Text style={styles.messageText}>{this.state.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cookieImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  button: {
    backgroundColor: '#2980b9',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  messageText: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default CookieApp;