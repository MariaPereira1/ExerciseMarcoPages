export const startLoadingGalleryAction = () => ({
  type: "START_LOADING_GALLERY"
});

export const setErrorGalleryAction = (message) => ({
  type: "SET_ERROR_GALLERY",
  payload: {
    message
  }
});

export const setDataGalleryAction = (data) => ({
  type: "SET_DATA_GALLERY",
  payload: {
    data
  }
});
