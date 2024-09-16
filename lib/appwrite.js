import {
  client,
  ID,
  Query,
} from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "co.edu.sena",
  projectId: "66e765310018c718bc4c",
  databaseId: "66e76d9b0026fbd769f2",
  userCollectionId: "66e76e1a0009cf856b41",
  videoCollectionId: "66e76e37001cb31abd3f",
  storageId: "66e7716a000d34d70ba6",
};





client
      .setEndpoint(appwriteConfig.endpoint)
      .setProject(config.projectId)
      .setPlatform(config.platform)


// Register user
export async function createUser(email, password, username) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    throw new Error(error);
  }
}