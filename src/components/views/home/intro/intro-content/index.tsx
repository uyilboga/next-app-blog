import styles from './IntroContent.module.scss';
import { useState } from 'react';

const IntroContent = () => {
  const [content] = useState<{ title: string; desc: string }>({
    title: "What's New?",
    desc: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
  });

  return (
    <div className={styles.introContent}>
      <div className={styles.title}>
        <h2>{content.title}</h2>
      </div>
      <div className={styles.desc}>
        <p>{content.desc}</p>
      </div>
    </div>
  );
};

export default IntroContent;
