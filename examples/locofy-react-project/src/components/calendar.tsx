import { FunctionComponent } from 'react';
import styled from 'styled-components';

const To7152023 = styled.div`
  position: relative;
`;
const IconArrowDown1 = styled.img`
  position: relative;
  width: 14px;
  height: 6.94px;
`;
const Property1variant2Root = styled.div`
  border-radius: 20px;
  background-color: #212121;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  gap: 10px;
  text-align: left;
  font-size: 14px;
  color: #fafafa;
  font-family: Inter;
`;

const Calendar: FunctionComponent = () => {
  return (
    <Property1variant2Root>
      <To7152023>{`To 7/15/2023 `}</To7152023>
      <IconArrowDown1 alt="" src="/-icon-arrow-down-12.svg" />
    </Property1variant2Root>
  );
};

export default Calendar;
