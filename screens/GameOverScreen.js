import { View, Text, StyleSheet } from 'react-native';

function GameOverScreen({userNumber}){
    return (
        <View style={styles.screen}>
        <Text style={styles.title}>Game Over! Your number was {userNumber}!</Text>
        </View>
    );	
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});