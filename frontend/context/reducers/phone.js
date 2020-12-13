export function phone(state, action) {
  switch (action.type) {
    case "UPDATE_PHONE":
      return { ...state, phone: action.payload };
    default:
      return state;
  }
}
