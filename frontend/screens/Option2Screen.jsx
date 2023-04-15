import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Option2Screen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedOptions: optionsFromPreviousScreen } = route.params;
  const [selectedOptions, setSelectedOptions] = useState(optionsFromPreviousScreen);

  const handleOptionPress = (option) => {
    const newOptions = [...optionsFromPreviousScreen, option];
    setSelectedOptions(newOptions);
  };

  const goToOption3 = () => navigation.navigate('Option3', { selectedOptions });

  return (
    <View style={[styles.container, {backgroundColor: '#ea1b15'}]}>
      <View style={styles.card}>
      <Button title="male" onPress={() => handleOptionPress('male')} />
      <Button title="female" onPress={() => handleOptionPress('female')} />
      <Button title="nono" onPress={() => handleOptionPress('nono')} />
      <Button title="Next" onPress={goToOption3} />
    </View>
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
    fontWeight: 'bold',
    fontFamily: 'Kanit_400Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
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
  buttonRow: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
    paddingBottom:'40px',
    paddingHorizontal:'100px'
  },
});

export default Option2Screen;
