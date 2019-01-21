import React, {Component} from 'react'
import { View, Button, TextInput } from 'react-native'

export default class InputNote extends Component
{
    constructor(props)
    {
        super(props)
        
        this.state={
            text:'',
        }
    }
    
    saveNote =() =>
    { 
        this.props.onNoteAdded(this.state.text)
        
        this.setState({
            text:'',
        })
    }

    render(){
        return (
            <View  style={{ flex: 2, backgroundColor: "#6cc4ee", borderTopColor: 'white', borderTopWidth: 3}}>
                <TextInput style={{ flex: 2, marginLeft: "5%", marginRight: "5%" }}

                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder="Write a note..."
                    multiline={true}
                />

            <Button          
                title='Add note'
                onPress={this.saveNote}
                style={{flex:1}}
            />
        </View>
        );
    }
}