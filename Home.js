import React from 'react';
import {View} from 'react-native';
import Icons from './Icons.js';
import Bar  from './Bar.js';

const getEmail = async (props) => {
  const emailResponse = await fetch('https://dev.stedi.me/validate/'+ props.userToken)
  const emailText = await emailResponse.text()
  return(
    loggedInUser = emailText
  )
}

const Home = (props) => {
  return (
    <View>
      <Bar loggedInUser = {getEmail()}/>
      <Icons />
    </View>
  );
};

export default Home;
