import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';
import Header from '../../components/Header'
import { Icon } from '@rneui/themed';
import { getPokemon } from '../../api';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Detalle = (props) => {

    const { url } = props.route.params.item

    const [abilities, setAbilities] = useState(null)
    const [moves, setMoves] = useState(null)
    const [stats, setStats] = useState(null)
    const [types, setTypes] = useState(null)

    useEffect(() => {
        getPokemonDetail()
    },[props])

    getPokemonDetail = () => {
        getPokemon(url).then(data => {
            setAbilities(data.abilities)
            setMoves(data.moves)
            setStats(data.stats)
            setTypes(data.types)
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header leftComponent={(
                < View style={styles.headerRight}>
                    <TouchableOpacity
                        style={{ marginLeft: 10 }}
                        onPress={() => props.navigation.goBack()}
                    >
                        <Icon type="font-awesome-5" name="arrow-left" color="white" />
                    </TouchableOpacity>
                </View>
            )} />
            <View>
                <View style={{ ...styles.gridRow, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20 }}>{pokemon && JSON.stringify(abilities)}</Text>
                    <Text style={{ fontSize: 20 }}>{pokemon && JSON.stringify(moves)}</Text>
                    <Text style={{ fontSize: 20 }}>{pokemon && JSON.stringify(stats)}</Text>
                    <Text style={{ fontSize: 20 }}>{pokemon && JSON.stringify(types)}</Text>
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

export default Detalle;