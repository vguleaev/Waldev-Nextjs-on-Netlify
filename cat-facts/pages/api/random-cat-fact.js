import axios from 'axios';

const url = 'https://cat-fact.herokuapp.com/facts/random';

export default async (req, res) => {
  const { data } = await axios.get(url);
  res.statusCode = 200;
  res.json({ fact: data.text });
};
