import axios from 'axios';
import { User } from '../types/user';



const url = 'http://localhost:8080/users';


export const getUsers = async () => {

  try {
    const axiosResponse = await axios.get(url);
    return axiosResponse.data;
  } catch (error) {
    console.error(error);
    const message = error instanceof Error ? error.message : 'Unexpected error';
    throw new Error(message);
  }
}

export const createUser = async (user:User) => {

  try {
    const axiosResponse = await axios.post(url, user);
    return axiosResponse;
  } catch (error) {
    console.error(error);
    const message = error instanceof Error ? error.message : 'Unexpected error';
    throw new Error(message);
  }
  
}

export const deleteUsers = async (ids: number[]) => {
  try {
    const axiosResponse = await axios.post(`${url}/delete`, ids);
    return axiosResponse;
  } catch (error) {
    console.error(error);
    const message = error instanceof Error ? error.message : 'Unexpected error';
    throw new Error(message);
  }
}


