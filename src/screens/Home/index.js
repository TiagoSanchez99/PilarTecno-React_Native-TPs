import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { Icon } from '@rneui/themed';
import Header from '../../components/Header'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Home = (props) => {

    const handlePressHome = () => {
        console.log("Hola desde HOME")
    }

    const handlePressLists = () => {
        props.navigation.navigate("ListsTab")
    }

    const handlePressMap = () => {
        props.navigation.navigate("MapTab")
    }

    const handlePressProfile = () => {
        props.navigation.navigate("ProfileTab")
    }

    return (
        <SafeAreaView style={styles.container}>

            <Header />
            <View>
                <View style={{ ...styles.gridRow, flexDirection: 'row' }}>
                    <View style={{ ...styles.gridColumn, justifyContent: 'flex-end', paddingBottom: '5%' }}>
                        <TouchableOpacity style={{ ...styles.gridButton, backgroundColor: 'orange' }} onPress={handlePressHome}>
                            <Text style={{ ...styles.buttonTitle }}>Home</Text>

                        </TouchableOpacity>

                    </View>
                    <View style={{ ...styles.gridColumn, justifyContent: 'flex-end', paddingBottom: '5%' }}>
                        <TouchableOpacity style={{ ...styles.gridButton, backgroundColor: 'green' }} onPress={handlePressLists}>
                            <Text style={{ ...styles.buttonTitle }}>Lista</Text>

                        </TouchableOpacity>

                    </View>
                </View>

                <View style={{ ...styles.gridRow, flexDirection: 'row' }}>
                    <View style={{ ...styles.gridColumn, justifyContent: 'flex-start', paddingTop: '5%' }}>
                        <TouchableOpacity style={{ ...styles.gridButton, backgroundColor: 'red' }} onPress={handlePressMap}>
                            <Text style={{ ...styles.buttonTitle }}>Mapa</Text>

                        </TouchableOpacity>

                    </View>

                    <View style={{ ...styles.gridColumn, justifyContent: 'flex-start', paddingTop: '5%' }}>
                        <TouchableOpacity style={{ ...styles.gridButton, backgroundColor: 'purple' }} onPress={handlePressProfile}>
                            <Text style={{ ...styles.buttonTitle }}>Perfil</Text>

                        </TouchableOpacity>

                    </View>
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
    },

    gridButton: {
        backgroundColor: '#707070',
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
        backgroundColor: '#707070'
    }
});

export default Home;