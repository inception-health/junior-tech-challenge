import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Text } from "react-native";

/*
  When user first opens the app, this screen is displayed.
  This screen presents user with an ActivityIndicator while the app is getting some information for the user to display.
  You do not need to worry about rendering this component to show us how it looks like in the app. We are only interested in your implementation.

  These are the requirements for this screen:
  - Display an ActivityIndicator while the app is initializing.
  - During initialization, call a function getUserDetails() that is provided to you.
  - Once the function is resolved, hide ActivityIndicator and display the user's name and email address inside a View.
  - Note that this assignment is intended to test your knowledge of basic React hooks, such as useState and useEffect.
*/

type UserDetails = {
  name: string;
  email: string;
};

export const Initialization = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [user, setUser] = useState<UserDetails>({ name: "", email: "" })

  const getUserDetails = async () => {
    // pretends to get user details from AsyncStorage
    return new Promise<UserDetails>((resolve) => {
      setTimeout(() => {
        resolve({
          name: "John Doe",
          email: "johnDoe@gmail.com",
        });
      }, 3000);
    });
  };

  useEffect(() => {
    getUserDetails().then((deets) => {
      setUser(deets);
    }).catch((e) => {
      throw `Error loading user details: ${e.message}`
    }).finally(() => {
      setLoading(false);
    })
  }, []);

  return (
    loading ? 
    <ActivityIndicator style={{flex: 1}}></ActivityIndicator>
    :
    <View>
      <Text>
        {user.name}
        {user.email}
      </Text>
    </View>
    
  );
};
