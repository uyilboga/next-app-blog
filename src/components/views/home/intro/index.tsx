import React from 'react';
import styles from './Intro.module.scss';
import { Row, Col, Container } from 'react-bootstrap';
import IntroPosts from '@/components/views/home/intro/intro-posts';
import IntroContent from '@/components/views/home/intro/intro-content';

const Intro = () => {
  return (
    <div className={styles.intro}>
      <Container>
        <Row>
          <Col lg={4}>
            <IntroContent />
          </Col>
          <Col lg={8}>
            <IntroPosts />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
