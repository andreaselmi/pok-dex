const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POKEMON_TO_CAUGHT":
      return {
        ...state,
        seen: state.seen.filter((pokemon) => pokemon.id !== action.payload.id),
          caught: [action.payload, ...state.caught],
      };

    case "ADD_POKEMON_TO_SEEN":
      return {
        ...state,
        seen: [action.payload, ...state.seen],
      };
    case "REMOVE_POKEMON_FROM_CAUGHT":
      return {
        ...state,
        caught: state.caught.filter((pokemon) => pokemon.id !== action.payload.id),
      }
      default:
        return state;
  }
};

export default Reducer;