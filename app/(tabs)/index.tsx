import React from 'react'; 
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from '../../components/ToDoList'; // Pastikan path sudah benar


export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ToDoList />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
});
