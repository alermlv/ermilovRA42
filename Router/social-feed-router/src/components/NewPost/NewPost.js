import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { nanoid } from 'nanoid';
import styles from './NewPost.module.scss';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoMdClose } from 'react-icons/io';

function NewPost() {
  const [post, setPost] = useState("");
  const navigate = useNavigate();

  function onClose() {
    navigate("/");
  };

  function handleChange(event) {
    const { value } = event.target;
    setPost(value);
  }

  function onSubmit() {
    if (post === "") return;

    const date = new Date();
    axios.post('http://localhost:7777/posts', {
      id: nanoid(),
      postDate: date,
      content: post
    })
      .then(onClose());
  };

  return (
    <Card>
      <ListGroup variant="flush">
        <ListGroup.Item className={styles.postHeader}>
          <IoMdClose onClick={onClose}/>
        </ListGroup.Item>
        <ListGroup.Item className={styles.postContent}>
          <div className={styles.userAvatar}>
            <img />
          </div>
          <Form.Control
            className={styles.postText}
            placeholder="Напишите текс поста"
            aria-label="Write a post"
            value={post}
            onChange={handleChange}
          />
        </ListGroup.Item>
        <ListGroup.Item className={styles.postFooter}>
          <Button 
            variant="primary"
            onClick={onSubmit} 
          >
            Опубликовать
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default NewPost;