export const selectDishModule = state => state.dish;
export const selectDishBiId = (state, id) => selectDishModule(state).entities[id];