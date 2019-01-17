import React, {Component} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TextInput} from 'react-native';
import Header from 'ToDoProject/Components/Header'
import MainBackground from 'ToDoProject/Components/MainBackground'

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <KeyboardAvoidingView  style = {{ flex: 1 }} behavior="padding" enabled>
      
        <Header text="ToDo List"></Header>
        <MainBackground/>
        <View  style = {{flex:1, backgroundColor:"#d2e9eb", borderTopColor: 'black', borderTopWidth: 3 }}>
          <TextInput style={{flex:1, marginLeft:"5%", marginRight:"5%" }}
          
          
          onChangeText={(text)=>this.setState({text})}
          value={this.state.text}          
          placeholder = "Write a note..."
          multiline = {true}

          />
        </View>
        
        
      </KeyboardAvoidingView>

    );
  }
}

