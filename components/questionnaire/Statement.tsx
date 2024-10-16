import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

export interface StatementProps {
    statement: string
}
    
export default function Statement(props: StatementProps) {
    return (
        <View style={styles.container}>
            <LinearGradient 
                colors={['rgba(0,0,0,0.8', 'rgba(0,0,0,0.2']} 
                style={styles.background} 
            />
            <Text style={styles.text}>{props.statement}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#852E9C',
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    background: {
        position: 'absolute',
       left: 0,
       right: 0,
       top: 0,
       bottom: 0,
    },
    text: {
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        opacity: 0.8,
    }
})