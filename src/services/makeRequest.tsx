import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../utils/Axios';

export const get_request = async (url: string) => {
  try {
    const token = await AsyncStorage.getItem('token');
    let config = {
      headers: {Authorization: 'Bearer ' + token},
    };
    return await axios.get(url, config);
  } catch (error) {
    // console.log('HELPER FUNCTION: ', err.response.data);
    return error;
  }
};

export const post_request = async (url: string, payload: any) => {
  let options: any;
  try {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      options = {
        headers: {Authorization: `Bearer ${token}`},
      };
    } else {
      options = null;
    }
    return await axios.post(url, payload, options);
  } catch (err: any) {
    console.log(err.response.data.message);
    return err;
  }
};

// export const request = async ({route, method, payload, params}: any) => {
//   const token = await AsyncStorage.getItem('token');
//   method = method ?? 'get';
//   const headers = {
//     Accept: 'application/json',
//     Authorization: `Bearer ${token}`,
//   };
//   if (!token) {
//     delete headers.Authorization;
//   }
//   return await axios({
//     data: payload,
//     url: `/${route}`,
//     method,
//     headers,
//     params,
//   });
// };
