import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button, Text} from 'react-native'
import { Header, CheckBox } from 'react-native-elements';
import InputNote from 'ToDoProject/Components/InputNote'

export default class Note extends Component {
constructor(props){
    super(props)
    this.state={
        check:false,
        title_text:''
    }
}
    checkBoxTest()
    {  
        this.setState(
        {
            check:!this.state.check
        })
    }
   
    render() {
        return (
            <View style={{flex:1, flexDirection:"row",  justifyContent: 'space-between'}}>
                <Text>{this.props.text}</Text>
                <CheckBox
                title={this.props.text}
                checked={this.state.check}
                onPress={() =>this.checkBoxTest()}   
                style={{flex:6}}
                />
                {/* <Button
                title="X"
                style={{flex:1,    }}
                color="red"
                />
                 */}
                    
                    
                
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