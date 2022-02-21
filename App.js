import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CamaraApp from './practicaCamara/CamaraApp';
import Navigation from './src/navigation/Navigation'



const App = () => {

  return (
   
     /*  <Navigation /> */
     <CamaraApp />
    
  );
};

const styles = StyleSheet.create({
  Container: {
   flex: 1,
  },
 
});

export default App;
