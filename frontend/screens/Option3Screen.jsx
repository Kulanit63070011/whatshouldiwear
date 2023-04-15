import React, { useState } from 'react';
import { View, Button, StyleSheet} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Option3Screen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedOptions: optionsFromPreviousScreen } = route.params;
  const [selectedOptions, setSelectedOptions] = useState(optionsFromPreviousScreen);

  const handleOptionPress = (option) => {
    const newOptions = [...optionsFromPreviousScreen, option];
    setSelectedOptions(newOptions);
  };

  const goToOption4 = () => navigation.navigate('Option4', { selectedOptions });

  return (
    <View style={[styles.container, {backgroundColor: '#ea1b15'}]}>
      <View style={styles.card}>
      <Button title="children" onPress={() => handleOptionPress('children')} />
      <Button title="teenage" onPress={() => handleOptionPress('teenage')} />
      <Button title="adult" onPress={() => handleOptionPress('adult')} />
      <Button title="Next" onPress={goToOption4} />
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

export default Option3Screen;
