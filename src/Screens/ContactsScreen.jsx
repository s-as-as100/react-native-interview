import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContactList from '../Components/ContactsList';
 
const ContactsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Team members</Text>
      <ContactList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ContactsScreen;
