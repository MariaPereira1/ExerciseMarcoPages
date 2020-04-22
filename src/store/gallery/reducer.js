const initialState = {
  isLoading: false,
  error: null,
  data: []
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_LOADING_GALLERY":
      return {
        ...state,
        isLoading: true
      };
    case "SET_ERROR_GALLERY":
      return {
        ...state,
        isLoading: false,
        error: action.payload.message
      };
    case "SET_DATA_GALLERY":
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      };
    default:
      return state;
  }
};

export default galleryReducer;
