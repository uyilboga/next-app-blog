import { CommentItemProps } from '@/components/shared/comment-item/CommentItem.types';
import styles from './CommentItem.module.scss';

const CommentItem = (props: CommentItemProps) => {
  const { email, body } = props;
  return (
    <div className={styles.commentItem}>
      <h4>{email}</h4>
      <p>{body}</p>
    </div>
  );
};

export default CommentItem;
