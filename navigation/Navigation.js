import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as React from 'react';
import { DetailsScreen } from '../screens/Details';
import { HomeScreen } from '../screens/Home';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "black"
    }
}

const Stack = createNativeStackNavigator();
function MyStack(){

    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
                name='Home' 
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name='Details' 
                component={DetailsScreen}
                options={{
                    headerShown: false
                }}/>
        </Stack.Navigator>
    );
}
export default  function Navigation() {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}
