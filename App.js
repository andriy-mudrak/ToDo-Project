import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Button, TextInput } from 'react-native';
import MyHeader from 'ToDoProject/Components/MyHeader'
import TaskList from 'ToDoProject/Components/TaskList'
import InputNote from 'ToDoProject/Components/InputNote'
export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.id =1;
    this.state = {
      
      notes: [
        { key: '1', description: 'task1', isDone: false },

      ]
    };
  }

  addNote = (text) => {
   // this.setState({title_text:text})
    this.id++;
    this.state.notes.push({
      key: this.id.toString(),
      description: text,
      isDone: false
    });
    this.setState({notes: this.state.notes});
    // })
  }
onDeleteNote = (id) =>
{
  for (var i = 0; i < this.state.notes.length; ++i) {
    if (this.state.notes[i].key === id) {
      this.state.notes.splice(i, 1);
      break;
    }
  }
  this.setState({
    notes:this.state.notes
  })
}

  render() {
    return (
      <View style={{ flex: 1 }}>

        <MyHeader text="ToDo List" />
        
        <View style={{ flex: 6, backgroundColor: "#9BD4F4" }}>
          <TaskList onDeleteNote={this.onDeleteNote} data={this.state.notes} extraData={this.state}></TaskList>
        </View>
        {/* <Text>{this.state.title_text}</Text> */}
        <KeyboardAvoidingView style={{ flex: 2 }} behavior="padding">
          <InputNote onNoteAdded={this.addNote}></InputNote>
        </KeyboardAvoidingView>

      </View>
    );
  }

}

