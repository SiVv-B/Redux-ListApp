const initialState = [
  { id: 0, description: 'default description from Reducer', done: false },
]

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]
    default:
      return state

    case 'DONE_TASK':
      return state.map((element) => {
        if (element.id === action.payload) {
          if (element.done === false) {
            return { ...element, done: true }
          }

          if (element.done === true) {
            return { ...element, done: false }
          }
        } else return element
      })

    case 'Edit_TASK':
      return state.map((element) => {
        if (element.id === action.payload.id) {
          return { ...element, description: action.payload.description }
        } else return element
      })
  }
}

export default Reducer
