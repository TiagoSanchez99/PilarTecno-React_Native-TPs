import React from 'react';
// import Home from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/routes/app'

const App = () => {

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

export default App;
