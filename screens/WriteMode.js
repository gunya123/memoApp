import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
//onPress={() => props.navigation.navigate('Home')
const Settings = (props) => {
  
  const [writeMode, setWriteMode] = useState(false); 
  const [txt, setTxt] = useState('');

  const orimemo = [
    {
      id:'1',
      memo:'hello world!'
    },
    {
      id:'2',
      memo:'This is memo program'
    }
  ];

  const [memos, setMemos] = useState(orimemo);
  const [idx, setIdx] = useState(3);

  const addMemo = () => {
    let a = {id:idx, memo:txt};
    setMemos(prev=>[...prev,a]); //[]로 배열화 하는것 왜냐? 위가 배열이기에.
    setWriteMode(false); // 화면이 닫히게 하는것.

    setIdx(prev=>prev+1);
  }

  const renderMemo = ({item}) => {
    return(
      <View style={{padding:10, borderBottomColor:'#ddd', borderBottomWidth:1, flex: 1, }}>
        <Text>{item.memo}</Text>
      </View>
    )
  }


  if(writeMode){
    return (
      <SafeAreaView style={styles.container2}>
      <View style={{flex:1, backgroundColor:'#FFCD00'}}>
        <View style={{flexDirection:'row', fontSize:20, justifyContent:'space-between', }}>
          <TouchableOpacity style={{padding:15,}} onPress={()=>setWriteMode(false)}>
            <Text>CANCEL</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{padding:15,}} onPress={()=>addMemo()}>
            <Text>SAVE</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{flex:1, backgroundColor:'#fff', }}>
        <TextInput
          style={{ backgroundColor: 'white', borderWidth: 1, flex: 1, padding: 10, }}
          onChangeText={text => setTxt(text)}
          multiline
         />
        </View>
        <StatusBar style="auto" />
      </View>
      </SafeAreaView>
    );
  }
  
  return (

    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor:'#FFCD00', 
        justifyContent:'space-between',
        flexDirection:'row',
        padding:15,
        }}>

          <Text style={{fontSize:20, }}>Write and Memorize your idea!</Text>
          <TouchableOpacity onPress={()=>setWriteMode(true)}>
            <AntDesign name="pluscircleo" size={24} color="black" />
          </TouchableOpacity>
      </View>
      <View style={{flex:1, backgroundColor:'#fff'}}>
        <FlatList data={memos} renderItem={renderMemo} style={{flex:1}}/>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCD00', 
  },
  container2: {
    flex: 1,
    backgroundColor: '#FFCD00',
  },
});

export default Settings;