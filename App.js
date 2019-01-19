import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Button, TextInput } from 'react-native';
import MyHeader from 'ToDoProject/Components/MyHeader'
import TaskList from 'ToDoProject/Components/TaskList'
import InputNote from 'ToDoProject/Components/InputNote'
export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title_text: '',
      id: 1,
      notes: [
        { key: '1', description: 'task1', isDone: false },

      ]
    };
  }

  addNote = (text) => {
   // this.setState({title_text:text})
    this.state.id++;
    this.state.notes.push({
      key: this.state.id.toString(),
      description: text,
      isDone: false
    });

    // })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <MyHeader text="ToDo List" />

        <View style={{ flex: 6, backgroundColor: "#9BD4F4" }}>
          <TaskList data={this.state.notes}></TaskList>
        </View>
        {/* <Text>{this.state.title_text}</Text> */}
        <KeyboardAvoidingView style={{ flex: 2 }} behavior="padding">
          <InputNote onNoteAdded={this.addNote}></InputNote>
        </KeyboardAvoidingView>

      </View>
    );
  }

}

