import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const uploadResult = await uploadPhoto();
    const userResult = await createUser();
    return { uploadResult, userResult };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
