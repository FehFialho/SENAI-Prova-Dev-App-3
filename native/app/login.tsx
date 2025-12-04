import { app } from "@/firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { router } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Swal from "sweetalert2";
import React, { useState } from "react";

export default function HomeScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app)

  const signIn = async () => {
  
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.navigate('/')
    } catch(e){
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Wrong Password or Email!",
        });
      }
  }

  return (

    <View style={[styles.container, {backgroundColor: "#171717"}]}>
      <Text style={styles.title}>Please Login</Text>

      <TextInput placeholder="Email" style={styles.input} onChangeText={(value) => setEmail(value)} />
      <TextInput placeholder="Password" style={styles.input} onChangeText={(value) => setPassword(value)} />

      <TouchableOpacity style={styles.button} onPress={() => signIn()}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={{display:'flex', flexDirection: 'row', marginVertical: 14}}>
        <Text style={{alignSelf: 'center', marginHorizontal: 10, color: '#8f8f8f'}}>Need an Account?</Text>
        <TouchableOpacity>
          <Text style={[styles.link, styles.red]} onPress={() => router.navigate('/signUp')}>Create</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  title: {
    color:"rgb(156, 156, 156)",
    alignSelf: "flex-start",
    fontSize: 20,
    marginBottom: 10,
  },

  subtitle: {
    color:"rgb(126, 126, 126)",
    alignSelf: "flex-start",
    fontSize: 16,
    marginVertical: 10,
  },

  input: {
    backgroundColor: "#333333",
    color: "rgb(156, 156, 156)",
    borderRadius: 15,
    height: 45,
    paddingHorizontal: 10,
    width: "100%", 
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#d12121",
    borderRadius: 15,
    paddingVertical: 12,
    width: "100%", 
    alignItems: "center",
    marginVertical: 10,
  },

  buttonText: {
    color: "#c7c7c7",
    fontWeight: "bold",
    fontSize: 16,
  },

  red: {
    color: "#d12121",
  },

  blue: {
    color: "#2145d1",
  },

  link: {
    fontWeight: "600",
    marginVertical: 5,
  },

});