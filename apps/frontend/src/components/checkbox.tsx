import { FunctionComponent } from 'react';
import styled from 'styled-components';

const IconMoreSquare = styled.img`
  position: relative;
  width: 15.5px;
  height: 15.5px;
`;
const Joined = styled.div`
  position: relative;
`;
const Property1defaultRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 9px;
  text-align: left;
  font-size: 14px;
  color: #fff;
  font-family: Inter;
`;

const Checkbox: FunctionComponent = () => {
  return (
    <Property1defaultRoot>
      <IconMoreSquare alt="" src="/assets/-icon-more-square1.svg" />
      <Joined>Joined</Joined>
    </Property1defaultRoot>
  );
};

export default Checkbox;
