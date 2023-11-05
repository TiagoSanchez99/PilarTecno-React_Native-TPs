import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Pressable
} from 'react-native';
import Header from '../../components/Header'

import { useDispatch } from 'react-redux'
import { appActions } from '../../redux/appRedux'
import { Avatar } from '@rneui/themed';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Profile = () => {

    const dispatch = useDispatch()

    handlePress = () => {
        dispatch(appActions.setToken(false))
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View>
            <Text style={{ fontSize: 20 }}>PERFIL</Text>
                <View style={{ ...styles.gridRow, flexDirection: 'row' }}>
                    <Avatar
                        size={32}
                        rounded
                        title="P.T."
                        containerStyle={{ backgroundColor: "#a0e310" }}
                    />
                    <Pressable style={{ ...styles.gridButton, backgroundColor: 'aqua' }} onPress={handlePress}>
                        <Text style={{ ...styles.buttonTitle }}>
                            LogOut
                        </Text>
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

export default Profile;