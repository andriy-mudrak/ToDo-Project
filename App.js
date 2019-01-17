import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Button, TextInput } from 'react-native';
import MyHeader from 'ToDoProject/Components/MyHeader'
import MainBackground from 'ToDoProject/Components/MainBackground'
import InputBottom from 'ToDoProject/Components/inputPart'
import { Header } from 'react-native-elements';
export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }


  render() {
    return (
      <KeyboardAvoidingView style={{flex:1}} behavior="padding"enabled>
      
      
          <MyHeader 
         
          text="ToDo List">
          </MyHeader>
        
        
        <MainBackground/>
        
        {/* <View> */}
        <InputBottom />
        </KeyboardAvoidingView>  
          
      
        
      

    );
  }
}

