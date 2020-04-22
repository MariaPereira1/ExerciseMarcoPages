import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  startLoadingGalleryAction,
  setDataGalleryAction,
  setErrorGalleryAction
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
        method: "GET"
      })
        .then((res) => res.json())
        .then((data) => {
          const gifs = data.map((item) => item.img);
          setData(gifs);
        })
        .catch(() => setError("something went wrong..."));
    };

    if (data.length === 0) {
      fetchData();
    }
  }, []);

  return (
    <div className="container-images">
      {isLoading && <p>Loading</p>}
      {error && <p>Error</p>}
      {!isLoading &&
        !error &&
        data.map((e, i) => <img key={i} className="gif-image" src={e} />)}
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
