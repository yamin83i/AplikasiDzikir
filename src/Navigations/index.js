import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Splash from '../Screen/Splash';
import DzikirPagi from '../Screen/DzikirPagi/index';
import DzikirPetang from '../Screen/DzikirPetang/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'DzikirPagi') {
            iconName = focused ? 'sun' : 'sun';
          } else if (route.name === 'DzikirPetang') {
            iconName = focused ? 'moon' : 'moon';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#148025',
        inactiveTintColor: '#148025',
      }}>
      <Tab.Screen name="DzikirPagi" component={DzikirPagi} />
      <Tab.Screen name="DzikirPetang" component={DzikirPetang} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
