const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POKEMON_TO_CAUGHT":
      return {
        ...state,
        watched: state.caught.filter((pokemon) => pokemon.name === action.payload.name),
          caught: [action.payload, ...state.caught],
      };

    case "ADD_POKEMON_TO_WATCHED":
      return {
        ...state,
        watched: [action.payload, ...state.watched],
      };
    default:
      return state;
  }
};

export default Reducer;