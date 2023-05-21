import axios from "axios";

export const updateUser = async (id, following, followers) => {
  try {
    const response = await axios.put(
      `https://64650529228bd07b353feaa6.mockapi.io/users/${id}`,
      {
        following,
        followers,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
