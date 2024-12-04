import { Link, router } from "expo-router";
import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import createUser from "../../lib/appwrite";
import { images } from '../../constants';
import FormField from '../../components/FormField';
import  CustomeButton  from '../../components/CustomButton';

const SignUp = () => {
  const [form, setform] = useState({
    username: '', 
    email: '',
    password: ''
  });
  
  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = () => {
      setisSubmitting(true);
      createUser(form).then(
        ()=>{
          alert("User created succesfuly");
          router.replace('../(auth)/sign-in')
          
        }
      )
      
      }


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
          <Image 
            source={images.logo} 
            resizeMode="contain"
            className="w-[115px] h-[85px]"
          />

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Sign up in to Aora
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setform({ ...form, username: e })}
            otherStyles="mt-10"
           
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setform({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setform({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomeButton 
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting }
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
             </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
            
          </View>
          <Link
              href="/home"
              className="text-lg font-psemibold text-secondary"
            >
              Home
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
