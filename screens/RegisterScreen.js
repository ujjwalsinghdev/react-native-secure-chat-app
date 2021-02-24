import React, { useLayoutEffect, useState } from "react"
import { StatusBar } from "expo-status-bar"
import { KeyboardAvoidingView } from "react-native"
import { Button, Input, Text } from "react-native-elements"
import { StyleSheet, View } from "react-native"
import { auth } from "../firebase"

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Login"
    })
  }, [navigation])

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL: imageUrl || "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon.png"
        })
      })
      .catch((error) => alert(error.message))
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal Account
      </Text>

      <View style={styles.inputContainer}>
        <Input placeholder="Full Name" autoFocus type="text" value={name} onChangeText={(text) => setName(text)} />
        <Input placeholder="Email" type="email" value={email} onChangeText={(text) => setEmail(text)} />
        <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(text) => setPassword(text)} />
        <Input
          placeholder="Profile Picture URL (Optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>

      <Button containerStyle={styles.button} raised title="Register" onPress={register} />

      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white"
  },
  inputContainer: {
    width: 300
  },
  button: {
    width: 200,
    marginTop: 10
  }
})
