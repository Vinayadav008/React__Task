import { addFav, removeFav } from "./ActionType";

export const addFav_fn = (data) => {
  return {
    type: addFav,
    payload:data
  };
};
export const removeFav_fn = (data) => {
  return {
    type: removeFav,
    payload:data
  };
};
