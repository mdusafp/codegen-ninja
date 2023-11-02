import { FunctionComponent } from 'react';
import LessonCard from '../components/lesson-card';
import styled from 'styled-components';
import Header from '../components/header';
import { useGetTenBujinkansQuery } from '../api/hooks';

const Cardlist = styled.section`
  /* align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start; */
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, minmax(240px, 1fr));

  @media screen and (min-width: 578px) {
    grid-template-columns: repeat(4, minmax(240px, 1fr));
  }
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
  const getTenBujinkansQuery = useGetTenBujinkansQuery({
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first'
  })
  const lessons = getTenBujinkansQuery.data?.ninjas?.Bujinkan.flatMap((bujinkan) => bujinkan.Lessons.map(lesson => ({ lesson, bujinkan })))
  console.log("🚀 ~ file: home-page.tsx:39 ~ getTenBujinkansQuery.data?.ninjas?.Bujinkan:", getTenBujinkansQuery.data?.ninjas?.Bujinkan)

  return (
    <HomepageRoot>
      <Content>
        <Cardlist>
          {lessons?.map((lesson) => (
            <LessonCard
              key={`bujinkan-${lesson.bujinkan.id}-lesson-${lesson.lesson.id}`}
              bujinkan={lesson.bujinkan as any}
              sensei={lesson.lesson.Sensei as any}
              subject={lesson.lesson.subject as any}
              padowans={lesson.lesson.PadowanToLessons as any}
            />
          ))}
        </Cardlist>
      </Content>
      <Header />
    </HomepageRoot>
  );
};

export default HomePage;
