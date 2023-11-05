import React, { useState } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    TextInput,
    KeyboardAvoidingView,
    Pressable
} from 'react-native';
import { Icon, Input, Button } from '@rneui/themed'
import { useDispatch } from 'react-redux'
import { appActions } from '../../redux/appRedux'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Login = () => {

    const dispatch = useDispatch()
    handlePress = () => {
        dispatch(appActions.setToken(true))
    }

    const [email, setEmail] = useState("")
    handlerChangeEmail = (value) => {
        setEmail(value)
    }

    const [password, setPassword] = useState("")
    handlerChangePassword = (value) => {
        setPassword(value)
    }

    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
    const handlePasswordVisibility = () => {
        if (rightIcon === 'eye') {
            setRightIcon('eye-slash');
            setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-slash') {
            setRightIcon('eye');
            setPasswordVisibility(!passwordVisibility);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formContainer}>
                <View>
                    <Input
                        containerStyle={styles.input}
                        value={email}
                        onChangeText={value => handlerChangeEmail(value)}
                        placeholder="Email"
                        keyboardType='email-address'
                    />
                </View>

                <View style={styles.inputPassContainer}>
                    <Input
                        containerStyle={styles.input}
                        value={password}
                        onChangeText={value => handlerChangePassword(value)}
                        placeholder="Contraseña"
                        secureTextEntry={passwordVisibility}
                    />
                    <Pressable onPress={handlePasswordVisibility}>
                        <Icon name={rightIcon} type="font-awesome-5" size={20} color="black" />
                    </Pressable>
                </View>
            </View>

            <View style={styles.buttons}>
                <Button onPress={handlePress}>
                    Ingresar
                </Button>
                <Text>   </Text>
                <Button onPress={() => console.log('Registrarse')}>
                    Registrarse
                </Button>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        width: WIDTH,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputPassContainer: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#d7d7d7'
    },
    input: {
        height: 40,
        width: WIDTH * .9,
        margin: 12,
        padding: 10,
    },
    buttons: {
        flexDirection: 'row',
        marginTop: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        width: WIDTH * .9,

    },
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

export default Login;