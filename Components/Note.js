import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button, Text, TouchableOpacity, Alert } from 'react-native'
import { Header, CheckBox, } from 'react-native-elements';
import InputNote from 'ToDoProject/Components/InputNote';
import { setDoneTask, onDeleteTask } from 'ToDoProject/Actions/ActionCreator';
import {connect} from 'react-redux';


class Note extends Component {
 
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', marginBottom: 15 }}>


                <View style={{ flex: 6 }}>
                    <CheckBox
                        title={this.props.text}
                        checked={this.props.isDone}
                        onPress={() => this.props.setDoneTask(this.props.index)}
                    />
                    {/* Alert.alert('You need to...') */}
                    {/* <Text>asdasd{this.props.text}</Text> */}
                </View>

                <View style={{ flex: 1, flexDirection: "column" }}>
                    <TouchableOpacity

                        style={{ flex: 1, justifyContent: "center", backgroundColor: this.props.isDone ? 'green' : 'red', borderRadius: 10 }}
                        onPress={() => this.props.onDeleteTask(this.props.index)}
                        
                    >
                        <Text style={{ color: "white", textAlign: "center" }}>X</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainBackground: {
        flex: 6,
        backgroundColor: "#9BD4F4"
    },

});

const mapDispatchToProps={
    setDoneTask,
    onDeleteTask
}

const mapStateToProps = (state) =>{
    return {
        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);