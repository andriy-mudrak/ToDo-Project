import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native'

export default MainBackground = ()=>{
    return(
        <View  style={styles.mainBackground}>
        </View>
    );
}
const styles = StyleSheet.create({
    mainBackground:{
        flex: 6, 
        backgroundColor:"#9BD4F4"
    },
});