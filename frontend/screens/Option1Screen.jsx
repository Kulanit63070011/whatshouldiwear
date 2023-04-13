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
      case 'Monday':
        arr = ['ส้ม','เหลือง','เขียว','เทา','ม่วง', 'น้ำตาล'];
        break;
      case 'Tuesday':
        arr = ['เงิน','ทอง','เทา','น้ำเงิน','แดง','ส้ม'];
        break;
      case 'Wednesday':
        arr = ['ฟ้า','เหลือง','ส้ม','ขาว','เงิน','ทอง'];
        break;
      case 'Wednesdayฤ':
        arr = ['ขาว','เหลือง','น้ำเงิน','แดง','น้ำตาล','ฟ้า'];
        break;
      case 'ศ':
        arr = ['ขาว','เหลือง','น้ำเงิน','น้ำตาล','เขียว','ฟ้า'];
        break;
      case 'Saturday':
        arr = ['แดง','เงิน','ทอง','ชมพู','ฟ้า','ดำ'];
        break;
      case 'Sunday':
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
    <View style={[styles.container, {backgroundColor: '#ea1b15'}]}>
      <View style={styles.card}>
      <View style={styles.buttonRow}>
      </View>
      <View style={styles.buttonRow}>
      <CustomButton title="Monday" onPress={() => handleOptionPress("Monday")}  backgroundColor="black" width={'110px'} isSelected={selectedOptions.includes('Monday')} />
      <CustomButton title="Tuesday" onPress={() => handleOptionPress("Tuesday")} backgroundColor="black" width={'110px'} isSelected={selectedOptions.includes('Tuesday')} />
      </View>
      <View style={styles.buttonRow}>
      <CustomButton title="Wednesday" onPress={() => handleOptionPress("Wednesday")} backgroundColor="black" width={'110px'} isSelected={selectedOptions.includes('Wednesday')} />
      <CustomButton title="Thursday" onPress={() => handleOptionPress("Wednesdayฤ")} backgroundColor="black" width={'110px'} isSelected={selectedOptions.includes('Wednesdayฤ')} />
      <CustomButton title="Friday" onPress={() => handleOptionPress("Friday")} backgroundColor="black" width={'110px'} isSelected={selectedOptions.includes('Friday')} />

      </View>
      <View style={styles.buttonRow}>      
     <CustomButton title="Saturday" onPress={() => handleOptionPress("Saturday")} backgroundColor="black" width={'110px'} isSelected={selectedOptions.includes('Saturday')} />
      <CustomButton title="Sunday" onPress={() => handleOptionPress("Sunday")} backgroundColor="black" width={'110px'} isSelected={selectedOptions.includes('Sunday')} />
      </View>
      <CustomButton title="Next" onPress={goToOption2} backgroundColor="#ff6347" width={250} />
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

export default Option1Screen;
