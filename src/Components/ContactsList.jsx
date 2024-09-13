/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {FlatList, ActivityIndicator, View, Text} from 'react-native';
import contactsData from '../Data/contactsData';
import ContactCard from './ContactCard';

const PAGE_SIZE = 5;

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isEndReached, setIsEndReached] = useState(false);  

  useEffect(() => {
    loadContacts();
  }, [page]);

  const loadContacts = () => {
    if (loading || isEndReached) return;

    setLoading(true);

    setTimeout(() => {
       const newContacts = contactsData.slice(
        (page - 1) * PAGE_SIZE,
        page * PAGE_SIZE,
      );

      if (newContacts.length === 0) {
        setIsEndReached(true);
      } else {
        setContacts(prevContacts => [...prevContacts, ...newContacts]);
      }

      setLoading(false);
    }, 1000);  
  };

  const handleLoadMore = () => {
    if (!isEndReached && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

  return (
    <View>
      <View style={{
        height:350
      }}>
        <FlatList
          data={contacts}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({item}) => <ContactCard contact={item} />}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
        />
      </View>

      {isEndReached && (
        <View style={{padding: 20, alignItems: 'center'}}>
          <Text>No more contacts to load</Text>
        </View>
      )}
    </View>
  );
};

export default ContactList;
