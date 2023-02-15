import React from "react";

interface Props {
  children: React.ReactNode;
}

const CharactersLayout = ({ children }: Props) => {
  return <section className="container mx-auto">{children}</section>;
};

export default CharactersLayout;
