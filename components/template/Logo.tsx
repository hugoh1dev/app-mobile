import { StyleSheet, Text, View } from "react-native";

export default function Logo() {
    return (
        <View style={{ }}>
            <Text style={styles.primary}>SPACE QUIZ</Text>
            <Text style={styles.secondary}>Questions from another world!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   primary: {
    fontFamily: 'SOLARSPACEDEMO-Regular',
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
   },
   secondary: {
    fontFamily: 'SPACEMISSION',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
   },
})