import React, {Component} from 'react'
import { View, Button, TextInput } from 'react-native'
import { addTask, setDoneTask } from 'ToDoProject/Actions/ActionCreator'
import {connect} from 'react-redux';


class InputNote extends Component
{
    constructor(props)
    {        
        super(props)   
        this.state={
            inputText:'',
        }
    }
    
    saveNote =() =>
    { 
        this.props.addTask(this.state.inputText)
        
        this.setState({
            inputText:'',
        })
    }

    render(){
        return (
            <View  style={{ flex: 2, backgroundColor: "#6cc4ee", borderTopColor: 'white', borderTopWidth: 3}}>
                <TextInput style={{ flex: 2, marginLeft: "5%", marginRight: "5%" }}

                    onChangeText={(inputText) => this.setState({ inputText })}
                    value={this.state.inputText}
                    placeholder="Write a note..."
                    multiline={true}
                />

            <Button          
                title='Add note'
                onPress={this.saveNote}
                style={{flex:1}}
                disabled={this.state.inputText.trim() == ''}

            />
        </View>
        );
    }
}

const mapDispatchToProps={
    addTask
}

const mapStateToProps = (state) =>{
    return {
        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputNote);