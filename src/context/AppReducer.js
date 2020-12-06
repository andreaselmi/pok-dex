const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POKEMON_TO_CAUGHT":
      return {
        ...state,
        watched: state.watched.filter((pokemon) => pokemon.id !== action.payload.id),
          caught: [action.payload, ...state.caught],
      };

    case "ADD_POKEMON_TO_WATCHED":
      return {
        ...state,
        watched: [action.payload, ...state.watched],
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