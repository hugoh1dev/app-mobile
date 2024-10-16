import { Pressable, StyleSheet, Text, View } from "react-native";

export interface ResultProps {
    score: number
    totalOfQuestions: number
    restart: () => void
}

export default function Result(props: ResultProps) {
    const { score, totalOfQuestions, restart } = props

    return (
        <View style={styles.container}>
            <Text style={styles.text}>You got it right!</Text>
            <Text style={styles.contrast}>
                {Math.round((score / totalOfQuestions) * 100)}%
            </Text>
            <Pressable style={styles.button} onPress={restart}>
                <Text style={styles.buttonText}>Restart</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {  
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 15,
      },
    text: {
        color: '#bbb',
        fontSize: 20,
     },
    contrast: {
        color: 'white',
        fontSize: 60,
        fontWeight: '900',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#2E9D48',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white'
    },
});