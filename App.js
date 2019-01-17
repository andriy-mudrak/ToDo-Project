import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Button, TextInput } from 'react-native';
import MyHeader from 'ToDoProject/Components/MyHeader'
import Notes from 'ToDoProject/Components/Notes'
import AddNote from 'ToDoProject/Components/AddNote'
export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }


  render() {
    return (
      <KeyboardAvoidingView style={{flex:1}} behavior="padding"enabled>
        <MyHeader text="ToDo List"/>        
        <Notes   />     
        <AddNote />
        </KeyboardAvoidingView>  
          
    );
  }
}

