import React from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Kanit_400Regular, Kanit_600SemiBold } from '@expo-google-fonts/kanit';

const HomeScreen = () => {
  const navigation = useNavigation();
  const goToOption1 = () => navigation.navigate('Option1');
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: 'https://i.pinimg.com/564x/11/75/da/1175dae3c0a0fd5920a2f3afb92d124b.jpg' }} />
        <Text style={[styles.title, {paddingTop: '10px'}]}>Welcome to my app</Text>
        <Text style={[styles.description, {padding: '10px'}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis justo, ultricies eget mauris vel, sollicitudin facilisis augue. Sed id fringilla neque.</Text>
        <CustomButton
          title="Get Started"
          onPress={goToOption1}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    </View>
  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ea1b15',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 10,
      elevation: 5,
      alignItems: 'center',
      height: '500px',
      justifyContent: 'center',
      width: '95%'
    },
    button: {
      backgroundColor: '#ff5629',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      width: '250px',
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Kanit_400Regular',
    },
    image: {
      width: '320px',
      height: '200px',
    },
    title: {
      fontWeight: 'bold',
    }
  });

  export default HomeScreen;
