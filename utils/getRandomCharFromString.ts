const getRandomCharFromString = (chars: string) => {
  return chars[Math.floor(Math.random() * chars.length)];
};

export default getRandomCharFromString;
