import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Input = ({ onAddTask }) => {
    const [task, setTask] = useState('');

    // Fungsi untuk mengirim tugas baru ke komponen induk 
    const handleAddTask = () => {
        if (task.length > 0) {
            onAddTask(task);
            setTask(''); // Reset input setelah menambah tugas
        }
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input} // Fix typo: style instead of styles
                placeholder="Add a new task"
                 value={task}
                onChangeText={setTask} 
            />
            <Button title="Add Task" onPress={handleAddTask} />
        </View>
    );     
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
    },   
});

export default Input;
