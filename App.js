import { StatusBar } from "expo-status-bar";
import { startTransition } from "react";
import {
  Button,
  ProgressViewIOSComponent,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

var textInputValue = "";
const handlePress = () => console.log(textInputValue);
const handleChangeText = () => console.log(textInputValue);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkBlue}></View>

      <View style={styles.lightBlue}>
        <Text style={styles.Header}>Hello World!</Text>
        <Text style={styles.insideHeader}>First React Native App</Text>

        <Text style={styles.stillInsideHeader}>
          This is a paragraph explaining what this app is all about.
          {"\n"}As you can see there are already many components including text,
          images and buttons.
        </Text>
      </View>
      <Text style={styles.body}>
        What would you like to get out of this course?
      </Text>
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          placeholder="Answer here brather"
          onChangeText={handleChangeText}
          placeholderTextColor="grey"
          multiline={false}
          numberOfLines={10}
        />
      </View>
      <Text style={styles.text2}>
        An emoji describing how you are feeling about the course:
      </Text>
      <Image
        style={{ width: 100, height: 100, top: 55 }}
        source={{
          uri: "https://www.nicepng.com/png/detail/845-8451416_drunk-emoji-png-icon-woozy-face-emoji.png",
        }}
      />
      <View style={styles.lastanswer}>
        <Button style={styles.button} title="Submit" onPress={handlePress} />
        <Text>Your answer is: {textInputValue}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },

  darkBlue: {
    width: "100%",
    height: "5%",
    backgroundColor: "#24305E",
  },

  lightBlue: {
    width: "100%",
    height: "30%",
    backgroundColor: "#A8D1E7",
  },

  Header: {
    fontSize: 30,
    fontWeight: "bold",
    top: 52,
    textAlign: "left",
  },
  insideHeader: {
    fontSize: 20,
    top: 57,
  },
  stillInsideHeader: {
    fontSize: 10,
    top: 67,
  },
  body: {
    top: 24,
  },

  textAreaContainer: {
    top: 28,
    backgroundColor: "#F2F2F2",
    padding: 5,
    height: 150,
    width: 300,
  },

  textArea: {
    textAlignVertical: "top",
    fontSize: 14,
    color: "#333",
  },

  text2: {
    top: 50,
    fontSize: 14,
  },

  lastanswer: {
    alignItems: "center",
    justifyContent: "center",
    top: 100,
  },
});
