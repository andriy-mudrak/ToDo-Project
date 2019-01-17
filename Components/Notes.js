import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { Header, CheckBox } from 'react-native-elements';


export default class Notes extends Component {
constructor(){
    super()
    this.state={
        check:true
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
            <View style={styles.mainBackground}>
                <CheckBox
                title='Click Here'
                checked={this.state.check}
                onPress={() =>this.checkBoxTest()}   
                />
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