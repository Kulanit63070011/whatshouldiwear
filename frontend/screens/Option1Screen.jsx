import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Kanit_400Regular } from '@expo-google-fonts/kanit';
import { TouchableOpacity, Text } from 'react-native';

const Option1Screen = () => {
  const navigation = useNavigation();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const CustomButton = ({ title, onPress, backgroundColor, width }) => {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor, width }]}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const handleOptionPress = (option) => {
    setSelectedOptions([option]);
  };

  const goToOption2 = () => navigation.navigate('Option2', { selectedOptions });
  

  return (
    <View style={styles.container}>
      <CustomButton title="พุธ" onPress={() => handleOptionPress('Wednesday')} backgroundColor="#008080" width={'10%'}/>
      <CustomButton title="ศุกร์" onPress={() => handleOptionPress('Friday')} backgroundColor="#4a4a4a" width={'10%'}/>
      <CustomButton title="Next" onPress={goToOption2} backgroundColor="#ff6347" width={250} />
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
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Kanit_400Regular',
    fontSize: 16,
  },
});

export default Option1Screen;
