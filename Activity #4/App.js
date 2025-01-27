import React, { useState } from 'react';
import { TextInput, SafeAreaView, StyleSheet, Button, View, Image } from 'react-native';
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
        <View style={styles.row}>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg' }} style={styles.image} />
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Name"
          />
        </View>
        <View style={styles.row}>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/011/020/009/original/age-icon-design-illustration-arrow-symbol-age-limit-concept-vector.jpg' }} style={styles.image} />
          <TextInput
            style={styles.input}
            onChangeText={setAge}
            value={age}
            placeholder="Age"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.row}>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/000/615/456/original/home-logo-and-symbols-vector.jpg' }} style={styles.image} />
          <TextInput
            style={styles.input}
            onChangeText={setAddress}
            value={address}
            placeholder="Address"
          />
        </View>
        <View style={styles.row}>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/008/040/272/original/school-logo-design-template-free-vector.jpg' }} style={styles.image} />
          <TextInput
            style={styles.input}
            onChangeText={setSchool}
            value={school}
            placeholder="School"
          />
        </View>
        <View style={styles.row}>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/024/049/007/original/computer-pc-icon-logo-design-vector.jpg' }} style={styles.image} />
          <TextInput
            style={styles.input}
            onChangeText={setCourse}
            value={course}
            placeholder="Course"
          />
        </View>
        <View style={styles.row}>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/022/647/958/original/email-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg' }} style={styles.image} />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.row}>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/000/449/769/original/call-vector-icon.jpg' }} style={styles.image} />
          <TextInput
            style={styles.input}
            onChangeText={setContactNumber}
            value={contactNumber}
            placeholder="contact number"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.row}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.myIDxukBVYGSjxuyhEyY4wHaHt?w=1000&h=1041&rs=1&pid=ImgDetMain' }} style={styles.image} />
          <TextInput
            style={[styles.input, styles.textArea]}
            onChangeText={setAboutMe}
            value={aboutMe}
            placeholder="About Me"
            multiline={true}
            numberOfLines={4}
          />
        </View>

        
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1, 
    paddingLeft: 10,
  },
  textArea: {
    height: 100, 
    textAlignVertical: 'top', 
  },
});

export default TextInputExample;