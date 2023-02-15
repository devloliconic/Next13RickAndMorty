import React from "react";

async function getCharacter() {
  const res = await fetch("https://rickandmortyapi.com/api/character/2");
  return res.json();
}

const Page = async () => {
  const character = await getCharacter();
  return <div>{character.name}</div>;
};

export default Page;
