import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wallpaper1Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 20px 20px 0px 0px;
  width: 240px;
  height: 140px;
  object-fit: cover;
`;
const Image1 = styled.div`
  position: relative;
  width: 240px;
  height: 140px;
`;
const Bujinkan = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 18px;
`;
const Sensei = styled.div`
  align-self: stretch;
  position: relative;
`;
const Div = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 8px;
`;
const BujinkanParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;
const Join = styled.div`
  position: relative;
`;
const Button = styled.div`
  border-radius: 10px;
  background-color: #610f1c;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 10px;
  font-size: 14px;
`;
const Content = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 20px;
  gap: 10px;
`;
const Property1defaultRoot = styled.div`
  border-radius: 20px;
  background-color: #2f3542;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 240px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: 13px;
  color: #fafafa;
  font-family: Inter;
`;

const LessonCard: FunctionComponent = () => {
  return (
    <Property1defaultRoot>
      <Image1>
        <Wallpaper1Icon alt="" src="/wallpaper-1@2x.png" />
      </Image1>
      <Content>
        <BujinkanParent>
          <Bujinkan>🏯 Bujinkan</Bujinkan>
          <Sensei>🥷 Sensei</Sensei>
          <Sensei>🏃 Subject</Sensei>
          <Sensei>👨‍🎓 Padowans</Sensei>
          <Div>🗓️ 14:00, 6/23/2013</Div>
        </BujinkanParent>
        <Button>
          <Join>join</Join>
        </Button>
      </Content>
    </Property1defaultRoot>
  );
};

export default LessonCard;
