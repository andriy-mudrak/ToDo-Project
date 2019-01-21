import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Button, TextInput } from 'react-native';
import MyHeader from 'ToDoProject/Components/MyHeader'
import TaskList from 'ToDoProject/Components/TaskList'
import InputNote from 'ToDoProject/Components/InputNote'
export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.id = 1;
    
    this.state = {
      notes: [
        { key: '1', description: 'task1' },
      ]
    };
  }

  addNote = (text) => {
    if (text != '') {
      this.id++;
      this.state.notes.push({
        key: this.id.toString(),
        description: text,
        isDone: false
      });
      this.setState({ notes: this.state.notes });
    }
  }
  onDeleteNote = (id) => {
      let notes = this.state.notes.filter(n=>n.key != id);
      this.setState({notes});

  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent:'flex-start', flexDirection: "column" }}>

        <View>
          <MyHeader text="TODO List" />
        </View>

        <View style={{ flex:6, backgroundColor: "#9BD4F4" }}>
          <TaskList
            onDeleteNote={this.onDeleteNote}
            data={this.state.notes}
            extraData={this.state}
          ></TaskList>
        </View>

        {/* <View style={{flex:2}}> */}
          <KeyboardAvoidingView style={{flex:2}}behavior="padding"  >
            {/* <View> */}
            <InputNote onNoteAdded={this.addNote}></InputNote>
        
          </KeyboardAvoidingView>
        
      </View>
    );
  }

}

