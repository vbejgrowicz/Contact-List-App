const initialState = {
  visible: 'SHOW ALL',
  sortBy: 'LAST',
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        visible: action.filterBy,
      };
    case 'SET_SORT':
      return {
        ...state,
        sortBy: action.sortBy,
      };
    default:
      return state;
  }
};

export default settings;
