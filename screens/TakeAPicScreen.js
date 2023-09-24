import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, TouchableOpacity } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';

export default function TakeAPicScreen() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text style = {styles.container}>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let savePhoto = () => {
      setPhoto(undefined);
    };

    return (
      <SafeAreaView style={styles.container2}>
        <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        <View style = {styles.container1}>
      
          <TouchableOpacity 
              onPress={() => setPhoto(undefined)}
              style={styles.button1}
          >
            <Text style = {{fontSize: 16,
              color: '#ffffff',
              fontFamily: 'Roboto',}}>Bỏ</Text>
          </TouchableOpacity>

          <TouchableOpacity 
              onPress={savePhoto}
              style={styles.button1}
          >
            <Text style = {{fontSize: 16,
              color: '#ffffff',
              fontFamily: 'Roboto',}}>Lưu</Text>
          </TouchableOpacity>

        </View>
        
      </SafeAreaView>
    );
  }

  return (
    
    <Camera style={styles.container} ref={cameraRef}> 
      <TouchableOpacity 
        onPress={takePic}
        style={styles.button}
    />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 110
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 110,
    marginBottom: 30
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  },
  button: {
    borderWidth: 6,
    borderColor: '#ffffff',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#C67C4E',
    margin: 10
},
container1: {
  flexDirection: 'row',
},
button1: {
  backgroundColor: '#C67C4E',
  paddingLeft: 40,
  paddingRight: 40,
  paddingTop: 15,
  paddingBottom: 15,
  borderRadius: 15,
  marginVertical: 20,
  marginHorizontal: 40
}
});