import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import { View, StatusBar } from 'react-native';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <View style={{ flex: 1, backgroundColor: '#312e38' }} />
  </NavigationContainer>
);

export default App;
