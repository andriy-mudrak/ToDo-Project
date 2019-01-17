import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default Header = (props) =>{
    return (
    <View style={styles.headerTop}>
        <View style={styles.headerBackgroud}>
           <Text style={styles.headerText}>
            {props.text}
           </Text>
       </View>
    </View>
    );
}
const styles = StyleSheet.create({
  headerBackgroud: {
      flex:1,
      height:"18%",
      borderBottomWidth: 3, 
      borderBottomColor: 'black', //#9AFBDB',
      backgroundColor:"#9BD6CC",
      justifyContent: 'center',
  },
  headerText:{
      textAlign: 'center',
      fontSize: 30, 
      fontWeight: 'bold',
  },
  headerTop:{
      flex: 1, 
  },
});