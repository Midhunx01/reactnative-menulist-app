import { View, Text, Pressable, StyleSheet, Platform } from "react-native";


export default function CategoryGridTile({ title, color }) {
    return (
        <View style={[styles.gridContainer, {backgroundColor : color}]}>
            <Pressable android_ripple={{color:'#ccc'}} style={ ({pressed}) =>  [styles.button, pressed ? styles.buttonPressed : null]}>
                <View style={styles.innerContainer} >
                    <Text style={styles.title} >{title}</Text>
                </View>
            </Pressable>

        </View>
    )
};

const styles = StyleSheet.create({
    gridContainer: {
        flex: 1,
        margin: 14,
        height: 150,
        borderRadius: 8,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowOpacity: 0.25,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'ios' ? 'visible' : 'hidden',
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.50,
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    }
})