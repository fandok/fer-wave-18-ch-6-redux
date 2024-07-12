import { ADD } from "../actions/person";

const initialState = [
  {
    id: 1,
    name: "Ryan Gosling",
    address: "Los Feliz, California, U.S",
    phoneNumber: "+1-123-123",
    photo: "https://placehold.co/600x400",
  },
];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    default:
      return state;
  }
}
