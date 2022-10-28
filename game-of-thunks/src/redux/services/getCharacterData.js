const getCharacterData = async (searchName) => {
  const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${searchName}`);
  const characterObj = await response.json();

  return characterObj;
};

export default getCharacterData;