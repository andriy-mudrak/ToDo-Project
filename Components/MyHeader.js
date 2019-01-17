import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default MyHeader = (props) => {
    return (
        <View style={styles.headerTop}>
            <Header
                centerComponent={{ text: 'TODO List', style: { color: '#fff', fontSize: 20 } }}
                rightComponent={{ icon: 'person', color: '#fff' }}
            />

        </View>

    );
}
const styles = StyleSheet.create({
    headerBackgroud: {
        flex: 1,
        //height: "18%",
        borderBottomWidth: 3,
        borderBottomColor: 'black', //#9AFBDB',
        backgroundColor: "#9BD6CC",
        justifyContent: 'center',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    headerTop: {
        flex: 1,
    },
});