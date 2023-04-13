import React, { useState } from 'react';
import { View, Button } from 'react-native';
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

  const goToAllOptions = () => navigation.navigate('AllOptions', { selectedOptions });

  return (
    <View>
      <Button title="children" onPress={() => handleOptionPress('children')} />
      <Button title="teenage" onPress={() => handleOptionPress('teenage')} />
      <Button title="adult" onPress={() => handleOptionPress('adult')} />
      <Button title="Next" onPress={goToAllOptions} />
    </View>
  );
};

export default Option2Screen;
