import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: '1',
      name: 'John Doe',
      status: 'Active',
      imageUrl:
        'https://img.freepik.com/free-photo/fun-illustration-3d-cartoon-backpacker_183364-80050.jpg?semt=ais_hybrid',
    },
    {
      uid: '2',
      name: 'Jane Smith',
      status: 'Offline',
      imageUrl:
        'https://img.freepik.com/premium-photo/illustration-medieval-man_183364-23229.jpg?semt=ais_hybrid',
    },
    {
      uid: '3',
      name: 'Michael Lee',
      status: 'Away',
      imageUrl:
        'https://img.freepik.com/premium-photo/fun-casual-woman_183364-33610.jpg?semt=ais_hybrid',
    },
    {
      uid: '4',
      name: 'Sarah Brown',
      status: 'Busy',
      imageUrl:
        'https://img.freepik.com/premium-photo/fun-illustration-cartoon-teenage-girl_183364-64438.jpg?semt=ais_hybrid',
    },
    {
      uid: '5',
      name: 'Chris Johnson',
      status: 'Active',
      imageUrl:
        'https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151134017.jpg?semt=ais_hybrid',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userContainer}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            resizeMode='stretch'/>
            <View style={styles.userDetails}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    margin: 6,
  },
  userContainer:{
    marginVertical: 2,
    backgroundColor: '#8B78E6',
    borderRadius: 12,
    flexDirection: 'row',
    paddingVertical:4,
    paddingHorizontal: 6,
  },
  userDetails:{
    justifyContent: 'center',
    marginHorizontal:12,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userName: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  userStatus: {
    color: "muted-white",
    fontSize: 12,
  },
});
