import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import WriteMode from '../screens/WriteMode';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Memo" component={WriteMode}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;