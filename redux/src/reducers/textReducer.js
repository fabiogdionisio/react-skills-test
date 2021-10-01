const text = (state = 'initial state text', action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return state = action.payload
    default:
      return state
  }
}

export default text
