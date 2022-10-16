import React, { useRef } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { addImage } from '../redux/imageSlice';
import { useDispatch } from 'react-redux';

function Header() {
  const dispatch = useDispatch();
  const fileInputRef = useRef();

  function addRef() {
    fileInputRef.current.click();
  }

  function inputChange(event) {
    const file = event.target.files[0];

    if (file && file.type.substr(0, 5) === "image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(addImage(reader.result));
      };
      reader.readAsDataURL(file);
    }
  }

  const spaceBetween = {
    justifyContent: "space-between", 
    alignItems: "center"
  }

  return (
    <Stack style={spaceBetween} direction="row">
      <h1>Фото галлерея</h1>
      <Button onClick={addRef} variant="contained">Добавить фото</Button>
      <input 
        type="file" 
        ref={fileInputRef} 
        accept="image/*"
        style={{display: "none"}}
        onChange={inputChange}
      />
    </Stack>
  );
};

export default Header;