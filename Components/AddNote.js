import React, {Component} from 'react'
import { View, Button, TextInput } from 'react-native'

export default class AddNote extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            text:'',
        }
    }
    
    AddNote =() =>
    {
        this.setState({
            text:'',
        })
    }

    render(){
        return (
            <View  style={{ flex: 3, backgroundColor: "#6cc4ee", borderTopColor: 'white', borderTopWidth: 3}}>
                <TextInput style={{ flex: 2, marginLeft: "5%", marginRight: "5%" }}

                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder="Write a note..."
                    multiline={true}
                    clearButtonMode="always"
                />

            <Button          
                title='Add note'
                onPress={this.AddNote}
                style={{flex:1}}
            />
        </View>
        );
    }
}