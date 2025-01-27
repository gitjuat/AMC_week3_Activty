import React, { useState } from 'react';
import { TextInput, SafeAreaView, StyleSheet, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [school, setSchool] = useState('');
  const [course, setCourse] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [aboutMe, setAboutMe] = useState(''); 

  const handleSubmit = () => {
    console.log({
      name,
      age,
      address,
      school,
      course,
      email,
      contactNumber,
      aboutMe, 
    });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Name:"
        />
        <TextInput
          style={styles.input}
          onChangeText={setAge}
          value={age}
          placeholder="Enter your age"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={setAddress}
          value={address}
          placeholder="Address:"
        />
        <TextInput
          style={styles.input}
          onChangeText={setSchool}
          value={school}
          placeholder="School:"
        />
        <TextInput
          style={styles.input}
          onChangeText={setCourse}
          value={course}
          placeholder="Course:"
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email:"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={setContactNumber}
          value={contactNumber}
          placeholder="Contact Number:"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          onChangeText={setAboutMe}
          value={aboutMe} 
          placeholder="About Me:"
          multiline={true}
          numberOfLines={4}
        />
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 10,
  },
});

export default TextInputExample;