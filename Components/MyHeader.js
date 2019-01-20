import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default MyHeader = (props) => {
    return (
        <View>
            <Header
                centerComponent={{ text: 'TODO List', style: { color: '#fff', fontSize: 20 } }}
                rightComponent={{ icon: 'person', color: '#fff' }}
            />
        </View>

    );
}
const styles = StyleSheet.create({
    headerTop: {
        flex: 1,
    },
});