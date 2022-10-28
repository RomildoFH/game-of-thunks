import getCharacterData from "../services/getCharacterData";

export const REQUEST_CHARACTER = 'REQUEST_CHARACTER';
export const GET_CHARACTER = 'GET_CHARACTER';

const genericCharacter = [
  {
    name: 'Not found',
  }
]

const requestCharacter = () => ({
  type: REQUEST_CHARACTER,
});

const receiveCharacter = (character) => ({
  type: GET_CHARACTER,
  payload: {
    name: character[0].name,
    gender: character[0].gender,
    born: character[0].born,
    died: character[0].died,
  }
});

const fetchCharacter = async (dispatch, searchName) => {
  const name = document.querySelector("#input-name").value;
  // console.log(name)
  try {
    dispatch(requestCharacter());
    const characterObj = await getCharacterData(name);
    // console.log(characterObj);

    dispatch(receiveCharacter(characterObj));
  } catch (error) {
    dispatch(receiveCharacter(genericCharacter));
  }
};

export const actionFetchCharacter = () => fetchCharacter;

// export const actionFetchCharacter = () => setTimeout(() => {fetchCharacter()}, 2000);