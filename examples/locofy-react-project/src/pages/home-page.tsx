import { FunctionComponent } from 'react';
import LessonCard from '../components/lesson-card';
import styled from 'styled-components';
import Header from '../components/header';

const Cardlist = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Content = styled.main`
  position: absolute;
  top: 14.29rem;
  left: 3.93rem;
  width: 83.57rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 3.57rem;
  box-sizing: border-box;
`;
const HomepageRoot = styled.div`
  position: relative;
  background-color: #212121;
  width: 100%;
  height: 59.43rem;
  overflow: hidden;
`;

const HomePage: FunctionComponent = () => {
  return (
    <HomepageRoot>
      <Content>
        <Cardlist>
          <LessonCard />
        </Cardlist>
      </Content>
      <Header />
    </HomepageRoot>
  );
};

export default HomePage;
