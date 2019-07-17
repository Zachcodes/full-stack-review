const initialState = {
  test: 'hello'
};

export default function(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}
