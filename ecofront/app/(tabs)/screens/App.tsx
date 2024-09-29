
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen'; 
import LoginScreen from './LoginScreen';    
import SignUpScreen from './SignUpScreen';   
import HomeScreen from '../index';       
import StatsScreen from '../StatsScreen';  
import LeaderboardScreen from '../LeaderboardScreen';
import CameraScreen from '../CameraScreen';   
import { RootStackParamList } from '../types'; 
import { registerRootComponent } from 'expo';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false}} >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StatsScreen" component={StatsScreen} options={{ gestureEnabled: false }}  />
        <Stack.Screen name="LeaderboardScreen" component={LeaderboardScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ gestureEnabled: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
registerRootComponent(App);

export default App;

