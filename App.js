import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Navigation from './navigation/Navigation'



const App = () => {

  return (
   
      <Navigation />
    
  );
};

const styles = StyleSheet.create({
  Container: {
   flex: 1,
  },
 
});

export default App;
