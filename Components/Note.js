import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button, Text, TouchableOpacity } from 'react-native'
import { Header, CheckBox, } from 'react-native-elements';
import InputNote from 'ToDoProject/Components/InputNote'

export default class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            check: false,
            color: "red"
        }
    }
    checkBoxTest() {

        let color = this.state.check ? 'red' : 'green';

        this.setState(
            {   color,
                check: !this.state.check
            })
    }

    deleteNote = () => {
        this.props.onDeleteNote(this.props.idNote)
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', marginBottom: 15 }}>


                <View style={{ flex: 6 }}>
                    <CheckBox
                        title={this.props.text}
                        checked={this.state.check}
                        onPress={() => this.checkBoxTest()}
                    />
                </View>

                <View style={{ flex: 1, flexDirection: "column" }}>
                    <TouchableOpacity

                        style={{ flex: 1, justifyContent: "center", backgroundColor: this.state.color, borderRadius: 10 }}
                        onPress={this.deleteNote}
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