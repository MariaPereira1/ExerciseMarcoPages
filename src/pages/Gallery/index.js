import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  startLoadingGalleryAction,
  setErrorGalleryAction,
  setDataGalleryAction
} from "../../store/gallery/actions";
import "./styles.less";

const Gallery = ({
  setIsLoading,
  setError,
  setData,
  isLoading,
  error,
  data
}) => {
  useEffect(() => {
    const fetchData = () => {
      setIsLoading();

      fetch("https://shouldyoudoit.herokuapp.com/all", {
        method: "get"
      })
        .then((response) => response.json())
        .then((data) => {
          const gifs = data.map((item) => item.img);
          setData(gifs);
        })
        .catch((e) => {
          setError("Something went wrong...");
        });
    };

    if (data.length === 0) {
      fetchData();
    }
  }, []);

  if (isLoading) {
    return (
      <div className="container">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container-images">
      {data.map((gif, index) => (
        <img key={index} src={gif} className="gif-image" />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.gallery.isLoading,
  error: state.gallery.error,
  data: state.gallery.data
});

const mapDispatchToProps = (dispatch) => ({
  setIsLoading: () => dispatch(startLoadingGalleryAction()),
  setError: (message) => dispatch(setErrorGalleryAction(message)),
  setData: (data) => dispatch(setDataGalleryAction(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
