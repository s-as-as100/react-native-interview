import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContactCard = ({ contact }) => {
  const getInitials = (name) => {
    const initials = name.split(' ').map((n) => n[0]).join('');
    return initials.toUpperCase();
  };

  return (
    <View style={styles.card}>
      <View style={styles.initialsContainer}>
        <Text style={styles.initials}>{getInitials(contact.name)}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.phone}>{contact.phone}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteText}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    elevation: 2,
  },
  initialsContainer: {
    backgroundColor: '#d9d9d9',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  initials: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 14,
    color: '#666',
  },
  deleteButton: {
    padding: 10,
  },
  deleteText: {
    fontSize: 20,
    color: 'red',
  },
});

export default ContactCard;
