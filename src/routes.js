import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Incidents from './pages/Incidents';
import IncidentsDetail from './pages/IncidenDetail';


const AppStack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="Incidents" component={Incidents}/>
                <AppStack.Screen name="IncidentDetail" component={IncidentsDetail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}