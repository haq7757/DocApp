import {
    Account,
    Client,
    ID,
  } from "react-native-appwrite";
import { router } from "expo-router";
  
  export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.tekofy.DocApp",
    projectId: "675026af001a5959f68c",
    databaseId: "67502b770029e9cf5ecc",
    userCollectionId: "67502d2a00298bf12293",
  };
  
  
  const client = new Client();
  client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId);
  

  const account = new Account(client);
  
 
const createUser = async (form) => {
    account
      .create(ID.unique(), form.email, form.password, form.username)
      .then(
        (response) => {
          
          router.push('../(auth)/sign-in');
          
          
        },
        (error) => {
          console.error(error);
        }
      );
  };
  
  export default createUser;
  