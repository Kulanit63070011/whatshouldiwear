import React from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Kanit_400Regular, Kanit_600SemiBold } from '@expo-google-fonts/kanit';

const HomeScreen = () => {
  const navigation = useNavigation();
  const goToOption1 = () => navigation.navigate('selected1');
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
      <Image style={styles.image} source={{ uri: 'https://media.discordapp.net/attachments/781482550287532064/1095261804952817684/Untitled.png?width=1441&height=628' }} />
      <CustomButton
        title="เริ่ม"
        onPress={goToOption1}
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#ff5629',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 100,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Kanit_400Regular',
  },
  image: {
    width: '320px',
    height: '200px',
  },
});

export default HomeScreen;
