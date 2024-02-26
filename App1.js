import React, { useState, useEffectn, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import { Camera } from 'expo camera';
import { FontAwesome} from '@expo/vector-icons';
export default function App() {
  const [type, setType] = usestate(Camera.const.type.back);
  const [hasPermission, setHaspermisson] = useState(null);
  const camRef = useRef(null);

  
 useEffect(() => {
  (async () => {
    const { status } = await Camera.requestPermissionAsync();
 setHaspermisson(status === 'granted');
  })();
 }, []);

 if (hasPermission === null){
  return <view/>;
 }

 if (hasPermission === false){
  return <text>Acesso negado!</text>
 }
 async function takepicture(){
if (camRef){
  const data = await camRef.current.takepictureAsync();
  console.log(data);
}
 }
 
  return (
    <SafeAreaView style={styles.container}>
     <Camera>
     style={{flex : 1}}
      type={type}
      ref= {camRef}
     
      <view style={{flex: 1, backgroundColor: 'transparent', flexDirection:'row'}}>
        <TouchableOpacity>
          style={{
            position: 'absolute',
            bottom: 20,
            left:20,
          }}
          OnPress= { () =>  {
          setType(
            type === Camera.constants.Type.back
            ? Camera.Constants.Type.front
            :Camera.Constants.Type.back
          );
          }}
           <Text Style>={{ fontSize: 20, marginBottom: 13, color: '#FFF'}}Trocar</Text>
        </TouchableOpacity> OnPress
      </view>
     </Camera>
<TouchableOpacity>
< FontAwesome name ="camera" size={23} color="FFF"/>

</TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
