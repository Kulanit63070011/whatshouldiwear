import React, { useEffect, useState } from 'react';
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

  const CustomButton = ({ title, onPress, backgroundColor, width, isSelected }) => {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: isSelected ? 'pink' : backgroundColor, width }]}>
        <Text style={[styles.text, { color: isSelected ? '#fff' : 'white' }]}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const goToOption2 = () => navigation.navigate('Option2', { selectedOptions });

  const handleOptionPress = (option) => {
    let arr;
    switch(option) {
      case 'จ':
        arr = ['ส้ม','เหลือง','เขียว','เทา','ม่วง', 'น้ำตาล'];
        break;
      case 'อ':
        arr = ['เงิน','ทอง','เทา','น้ำเงิน','แดง','ส้ม'];
        break;
      case 'พ':
        arr = ['ฟ้า','เหลือง','ส้ม','ขาว','เงิน','ทอง'];
        break;
      case 'พฤ':
        arr = ['ขาว','เหลือง','น้ำเงิน','แดง','น้ำตาล','ฟ้า'];
        break;
      case 'ศ':
        arr = ['ขาว','เหลือง','น้ำเงิน','น้ำตาล','เขียว','ฟ้า'];
        break;
      case 'ส':
        arr = ['แดง','เงิน','ทอง','ชมพู','ฟ้า','ดำ'];
        break;
      case 'อา':
        arr = ['ม่วง','เทา','แดง','ส้ม','เหลือง','เขียว'];
        break;
      default:
        arr = [];
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    const selectedOption = arr[randomIndex];
    setSelectedOptions([selectedOption]);
  };
  

  return (
    <View style={styles.container}>
      <CustomButton title="จ" onPress={() => handleOptionPress("จ")}  backgroundColor="black" width={'10%'} isSelected={selectedOptions.includes('จ')} />
      <CustomButton title="อ" onPress={() => handleOptionPress("อ")} backgroundColor="black" width={'10%'} isSelected={selectedOptions.includes('อ')} />
      <CustomButton title="พ" onPress={() => handleOptionPress("พ")} backgroundColor="black" width={'10%'} isSelected={selectedOptions.includes('พ')} />
      <CustomButton title="พฤ" onPress={() => handleOptionPress("พฤ")} backgroundColor="black" width={'10%'} isSelected={selectedOptions.includes('พฤ')} />
      <CustomButton title="ศ" onPress={() => handleOptionPress("ศ")} backgroundColor="black" width={'10%'} isSelected={selectedOptions.includes('ศ')} />
      <CustomButton title="ส" onPress={() => handleOptionPress("ส")} backgroundColor="black" width={'10%'} isSelected={selectedOptions.includes('ส')} />
      <CustomButton title="อา" onPress={() => handleOptionPress("อา")} backgroundColor="black" width={'10%'} isSelected={selectedOptions.includes('อา')} />
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
    fontWeight: 'bold',
    fontFamily: 'Kanit_400Regular',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Option1Screen;
