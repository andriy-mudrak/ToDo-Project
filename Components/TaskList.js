import React, { Component } from 'react';
import { FlatList, Text, View, KeyboardAvoidingView } from 'react-native';
import Note from 'ToDoProject/Components/Note';
import { connect } from 'react-redux';
import { addTask, setDoneTask } from 'ToDoProject/Actions/ActionCreator'

class TaskList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            // <View style={{ flex: 1, justifyContent: 'flex-start', flexDirection: "column" }}>
                <View style={{ flex: 6, backgroundColor: "#9BD4F4" }}>
                    <FlatList
                        style={{ flex: 6, backgroundColor: "#9BD4F4"}}
                        data={this.props.notes}
                        renderItem={({ item }) =>
                            <Note
                                //onDeleteNote={props.onDeleteNote}
                                index={item.index}//index
                                text={item.text}
                                isDone={item.isDone}

                            >

                            </Note>}
                        keyExtractor={(item, index) => index.toString()}
                        extraData={this.props.notes}

                    />
                {/* </View> */}
                
                    {/* <KeyboardAvoidingView style={{ flex: 2 }} behavior="padding"  > */}
                        {/* <View> */}
                        {/* onNoteAdded={this.addNote} */}
                        {/* <InputNote ></InputNote> */}

                    {/* </KeyboardAvoidingView> */}
                
            </View>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes.map((note, index) => { return { ...note, index: index.toString() } })
    };
}

const mapDispatchToProps = {
    // setDoneTask,
    // addTask
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);