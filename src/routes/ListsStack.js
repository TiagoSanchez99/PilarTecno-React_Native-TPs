import React, { Component } from 'react';
import Lists from '../screens/Lists/Lists'
import ListDetail from '../screens/Lists/ListDetail'
import { createStackNavigator } from '@react-navigation/stack';

const ListsStack = createStackNavigator();

export const ListsStackScreen = () => {
    return (
        <ListsStack.Navigator screenOptions={{ headerShown: false }}>
            <ListsStack.Screen name="Lists" component={Lists} />
            <ListsStack.Screen name="ListDetail" component={ListDetail} />
        </ListsStack.Navigator>
    )
}