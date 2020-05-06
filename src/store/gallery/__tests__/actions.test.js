import { startLoadingGalleryAction, setErrorGalleryAction, setDataGalleryAction } from "../actions";

describe("Gallery action tests", () => {

  test("Start loading gallery", () => {
    expect(startLoadingGalleryAction()).toEqual({
      type: "START_LOADING_GALLERY"
    })
  });

  test("Set error gallery", () => {
    const message = "random";
    expect(setErrorGalleryAction(message)).toEqual({
      type: "SET_ERROR_GALLERY",
      payload: {
        message
      }
    });
  });

  test("Set data gallery", () => {
    const data = "whatever";

    expect(setDataGalleryAction(data)).toEqual({
      type: "SET_DATA_GALLERY",
      payload: {
        data
      }
    })
  })

});

