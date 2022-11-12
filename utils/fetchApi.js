import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '625cc79fdemsh0e7f3bc993ba133p124da2jsn2aeef0afc29d',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  });

  return data;
}