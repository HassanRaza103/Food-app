// rapisapi.js
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const BASE_URL = 'https://youtube138.p.rapidapi.com';





const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  }
};

const FetchData = async (url) => {
  try {
    const res = await fetch(`${BASE_URL}/${url}`, options);
    const data = await res.json();
    console.log('API Responsesssss:', data); 
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; 
  }
};

export default FetchData;
