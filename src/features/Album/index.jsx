import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhac Tru Tinh",
      thumbnailURL:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/c/a/9/6ca9daecf773ef8e8243e37c8ae227b8.jpg",
    },
    {
      id: 2,
      name: "Nhac Vang",
      thumbnailURL:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/a/c/c/cacc7d4e05380c2fa50d54a1207fb495.jpg",
    },
    {
      id: 3,
      name: "Nhac Thanh Nien",
      thumbnailURL:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/f/e/9/8/fe9875941d98fbbcb8aedc8960ccbc94.jpg",
    },
  ];
  return <div>
    <h2>Ban Thich No Khong</h2>
    <AlbumList albumList={albumList}/>
  </div>;
}

export default AlbumFeature;
