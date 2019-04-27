import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from "react-native";
import ImagePicker from "react-native-image-picker";

export default function Buttons() {
  const [fileName, setFileName] = useState({});
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    },
    img:{ width: 100, height: 100 },
    text:{ alignItems: "center" },
  });
  chooseFile = () => {
    let options = {
      title: "انتخاب عکس",
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        let source = response;
        console.log("source", source);
        return setFileName(source);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image source={{uri: "data:image/jpeg;base64," + fileName.data}}
          style={styles.img}
        />

        <Text style={styles.text}>{fileName.uri}</Text>
        <Button
          title="Choose File"
          onPress={() => {
            chooseFile();
          }}
        />
      </View>
    </View>
  );
}
