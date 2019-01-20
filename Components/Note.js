import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button, Text, TouchableOpacity} from 'react-native'
import { Header, CheckBox,  } from 'react-native-elements';
import InputNote from 'ToDoProject/Components/InputNote'

export default class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            check: false,
            title_text: ''
        }
    }
    checkBoxTest() {
        this.setState(
            {
                check: !this.state.check
            })
    }

    somefunc() {

    }
    deleteNote = () => {
        this.props.onDeleteNote(this.props.idNote)
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between' }}>

                {/* <Text>{this.props.idNote}</Text> */}
                <View style={{flex:6}}>
                    <CheckBox
                        title={this.props.text}
                        checked={this.state.check}
                        onPress={() => this.checkBoxTest()}
                    />
                </View>
                {/* <View style={{flex:1}}> */}
                {/* justifyContent:"center", */}
                <View style={{flex: 1}}>
                    <TouchableOpacity
                        
                        style={{  backgroundColor:"red",  borderRadius:10}}
                        onPress={this.deleteNote}
                        >
                        <Text style={{color:"white,", textAlign:"center"}}>X</Text>
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