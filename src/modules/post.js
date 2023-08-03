import { baseUrl, gameId } from './apiUrl.js';

const headers = { 'Content-Type': 'application/json' };

const postData = async (name, score) => {
  try {
    const response = await fetch(`${baseUrl}/games/${gameId}/scores`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ user: name, score }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default postData;