import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Button, TextInput } from 'react-native';
import MyHeader from 'ToDoProject/Components/MyHeader'
import TaskList from 'ToDoProject/Components/TaskList'
import { createStore } from 'redux';
import toDoReducer from 'ToDoProject/Reducers/Reducer'; 
import { Provider } from 'react-redux';
import InputNote from 'ToDoProject/Components/InputNote'
import { addTask } from 'ToDoProject/Actions/ActionCreator';
import {connect} from 'react-redux';

// треба прописати метод toDOReducer
const store = createStore(toDoReducer);


export default class MainPage extends Component {
  constructor(props) {

    super(props);
  }
  

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1, justifyContent: 'flex-start', flexDirection: "column" }}>

          <View>
            <MyHeader text="TODO List" />
          </View>

          <View style={{ flex: 16}}>
            <TaskList
             
            ></TaskList>
          </View>

          {/* <View style={{flex:2}}> */}
          <KeyboardAvoidingView style={{ flex: 6 }} behavior="padding"  >
            {/* <View> */}
            <InputNote></InputNote>

          </KeyboardAvoidingView> 

        </View>
      </Provider>
    );
  }

}