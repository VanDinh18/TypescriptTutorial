/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


class HelloMessage {
  message: string;
  constructor({
    message
  }: {
    message: string
  }) {
    this.message = message;
  }
}
interface IMessage {
  message: string
}
type MessageType = 'hello' | 'goodbye';
function getMessage(type: MessageType): IMessage {
  if (type === 'hello')
    return {
      message: 'hello world !'
    };
  if (type === 'goodbye') {
    return {
      message: 'goodbye'
    };
  }
  return {
    message: ''
  };
}
function App() {
  const msg = new HelloMessage({ message: "Hello World !" });
  return (
    <View>
      <Text>{msg.message}</Text>
      <Text>{getMessage('goodbye').message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

});

export default App;
