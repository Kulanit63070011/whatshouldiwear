import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const AllOptionsScreen = () => {
  const route = useRoute();
  const { selectedOptions } = route.params;

  return (
    <View>
      {selectedOptions.map((option, index) => (
        <Text key={index}>{option}</Text>
      ))}
    </View>
  );
};

export default AllOptionsScreen;
