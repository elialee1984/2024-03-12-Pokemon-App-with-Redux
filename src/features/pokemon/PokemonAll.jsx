import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getData } from "./pokemonSlice";

const PokemonAll = () => {
  const dispatch = useDispatch();

  return <div>{dispatch(getData())}</div>;
};

export default PokemonAll;
