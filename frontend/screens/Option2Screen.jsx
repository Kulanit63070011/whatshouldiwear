import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';

const Option2Screen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedOptions: optionsFromPreviousScreen } = route.params;
  const [selectedOptions, setSelectedOptions] = useState(optionsFromPreviousScreen);

  const handleOptionPress = (option) => {
    setSelectedOptions([...selectedOptions, option]);
  };

  const goToAllOptions = () => navigation.navigate('AllOptions', { selectedOptions });

  return (
    <View>
      <Button title="Option 2 - Choice 1" onPress={() => handleOptionPress('Choice 1')} />
      <Button title="Option 2 - Choice 2" onPress={() => handleOptionPress('Choice 2')} />
      <Button title="Next" onPress={goToAllOptions} />
    </View>
  );
};

export default Option2Screen;
