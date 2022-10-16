import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useSelector } from 'react-redux';

function ImagesList() {
  const images = useSelector(state => state.image);

  return (
    <ImageList style={{margin: "0 auto"}} cols={3}>
      {images && images.map(image => (
        <ImageListItem key={image.id}>
          <img
            style={{width: "200px", height: "200px"}}
            src={image.src}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImagesList;