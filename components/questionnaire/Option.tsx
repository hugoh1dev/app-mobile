import { Pressable, StyleSheet, Text } from "react-native"

export interface OptionProps {
    index: number
    text: string
    onPress: () => void
}

export default function Option(props: OptionProps) {
    return (
        <Pressable style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2E9D48',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 50,
    },
    text: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
    }
})