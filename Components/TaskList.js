import React from 'react';
import { FlatList } from 'react-native';
import Note from 'ToDoProject/Components/Note'

export default TaskList = (props) => {
    return (
        <FlatList
            data={props.data}
            renderItem={({ item }) => <Note text={item.description}></Note>}
        />
    );
} 