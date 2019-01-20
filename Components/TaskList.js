import React from 'react';
import { FlatList, Text } from 'react-native';
import Note from 'ToDoProject/Components/Note'

export default TaskList = (props) => {
    return (
        <FlatList
            data={props.data}
            extraData={props.extraData}
            renderItem={({ item }) => <Note onDeleteNote={props.onDeleteNote} idNote={item.key} text={item.description}></Note>}
            
        />
    );
} 