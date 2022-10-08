import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import styles from './CurrentPost.module.scss';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoMdClose } from 'react-icons/io';
import { nanoid } from 'nanoid';

function CurrentPost() {
  const [post, setPost] = useState({});
  const [editPost, setEditPost] = useState({});
  const [mode, setMode] = useState("view");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    axios.get('http://localhost:7777/posts')
      .then(responce => responce.data)
      .then(data => setPost(
        data.find(post => {
          return post.id === params.id
      })
    ));
  };

  function onClose() {
    navigate("/");
  };

  function onEdit() {
    setEditPost(post);
    setMode("edit");
  };

  function onDelete() {
    axios.delete(`http://localhost:7777/posts/${params.id}`)
      .then(onClose());
  };

  function handleChange(event) {
    const { value } = event.target;
    setEditPost(prevPost => ({
      ...prevPost,
      content: value
    }));
  };

  function onSubmit() {
    if (post === "") return;

    const date = new Date();

    axios.delete(`http://localhost:7777/posts/${params.id}`)
    axios.post('http://localhost:7777/posts', {
      id: nanoid(),
      postDate: date,
      content: editPost.content
    })
      .then(setMode("view"))
      .then(onClose());
  };

  return (
    <>
      {mode === "view" ? (
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <div className={styles.postHeader}>
                <div className={styles.userAvatar}>
                  <img />
                </div>
                <div className={styles.userInfo}>
                  <span className={styles.userName}>Ilnaz Gilyazov</span>
                  <small className={styles.postDescription}>
                    Основатель группы
                    <span>{moment(post.postDate).fromNow()}</span>
                  </small>
                </div>
              </div>

              <p className={styles.postContent}>{post.content}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className={styles.buttonGroup}>
                <button>Нравится</button>
                <button>Комментировать</button>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className={styles.postFooter}>
              <Button 
                variant="primary"
                onClick={onEdit} 
              >
                Изменить
              </Button>
              <Button 
                variant="primary"
                onClick={onDelete} 
              >
                Удалить
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      ) : (
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
                value={editPost.content}
                onChange={handleChange}
              />
            </ListGroup.Item>
            <ListGroup.Item className={styles.postFooter}>
              <Button 
                variant="primary"
                onClick={onSubmit} 
              >
                Сохранить
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      )}
    </>
  )
}

export default CurrentPost;