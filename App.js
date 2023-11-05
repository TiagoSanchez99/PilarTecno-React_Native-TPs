import React from 'react';
// import Home from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/routes/app'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;