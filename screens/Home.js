import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFCD00'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
   
  }
});

const Home = (props) => {
  return(
    <View style={styles.container}>
      <View>

        <Text style={{fontSize:20, }}>START YOUR MEMO LIFE</Text>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Memo')}>
        <Text>START</Text>
        </TouchableOpacity>
        </View>
       
    </View>
  )
}

export default Home;