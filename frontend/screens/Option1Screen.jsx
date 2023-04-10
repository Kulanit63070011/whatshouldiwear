import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const Option1Screen = () => {
  const navigation = useNavigation();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionPress = (option) => {
    setSelectedOptions([...selectedOptions, option]);
  };

  const goToOption2 = () => navigation.navigate('Option2', { selectedOptions });

  return (
    <View>
      <Button title="Option 1 - Choice 1" onPress={() => handleOptionPress('Choice 1')} />
      <Button title="Option 1 - Choice 2" onPress={() => handleOptionPress('Choice 2')} />
      <Button title="Next" onPress={goToOption2} />
    </View>
  );
};

export default Option1Screen;
