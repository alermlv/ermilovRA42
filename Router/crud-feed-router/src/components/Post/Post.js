import React from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import styles from './Post.module.scss';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { MdEdit } from 'react-icons/md';

function Post(props) {
  const { post } = props;
  const navigate = useNavigate();

  function onEdit() {
    navigate(`/${post.id}`);
  };

  return (
    <div className={styles.post}>
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <div className={styles.postHeader}>
              <div className={styles.userAvatar}>
                <img />
              </div>
              <div className={styles.userInfo}>
                <span className={styles.userName}>{post.userName}</span>
                <small className={styles.postDescription}>
                  {post.userRole}
                  <span>{moment(post.postDate).fromNow()}</span>
                </small>
              </div>
              <div className={styles.editButton}>
                <MdEdit onClick={onEdit}/>
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
            <div className={styles.userAvatarSmall}>
              <img />
            </div>
            <Form.Control
              className={styles.postComment}
              placeholder="Напишите комментарий"
              aria-label="Write a comment"
            />
            <div className={styles.buttonGroup}>

            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  )
}

export default Post;