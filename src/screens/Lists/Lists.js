import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Pressable
} from 'react-native';
import Header from '../../components/header'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Lists = (props) => {

    const handlePress = () => {
        props.navigation.navigate("ListDetail")
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View>
                <View style={{ ...styles.gridRow, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20 }}>Lists</Text>
                    <Pressable style={{ ...styles.gridButton, backgroundColor: 'aqua' }} onPress={handlePress}>
                        <Text style={{ ...styles.buttonTitle }}>Ir al detalle</Text>

                    </Pressable>
                </View>
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    gridColumn: {
        flex: 1,
        alignItems: 'center'
    },

    gridRow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    gridButton: {
        width: WIDTH * .4,
        height: WIDTH * .4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        elevation: 3
    },

    buttonTitle: {
        fontSize: 18,
        color: 'white',
        fontWeight: '500'
    },

    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center'
    }
});

export default Lists;