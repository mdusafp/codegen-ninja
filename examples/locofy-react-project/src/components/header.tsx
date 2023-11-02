import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  position: relative;
`;
const Shaonline = styled.div`
  position: relative;
  font-size: 30px;
  font-family: 'Joti One';
`;
const Logo = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;
const GroupIcon = styled.img`
  position: relative;
  width: 21.5px;
  height: 21.5px;
`;
const T = styled.span`
  letter-spacing: 0.01em;
`;
const SearchBujinkansByContainer = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
`;
const GroupParent = styled.div`
  flex: 1;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;
const SearchinputInner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Searchinput = styled.div`
  border-radius: 20px;
  background-color: #212121;
  border: 1px solid rgba(97, 15, 28, 0);
  box-sizing: border-box;
  width: 771px;
  height: 43px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
`;
const IconArrowDown1 = styled.img`
  position: relative;
  width: 14px;
  height: 6.94px;
`;
const Calendar1 = styled.div`
  border-radius: 20px;
  background-color: #212121;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  gap: 10px;
`;
const IconMoreSquare = styled.img`
  position: relative;
  width: 15.5px;
  height: 15.5px;
`;
const Checkbox1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 9px;
  color: #fff;
`;
const Filters = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
  color: #fafafa;
`;
const Search = styled.div`
  height: 43px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  font-size: 14px;
  color: #a2a2a2;
`;
const AccountIcon = styled.img`
  position: relative;
  width: 46.37px;
  height: 46.5px;
`;
const Content = styled.div`
  width: 1170px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Box = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Property1defaultRoot = styled.div`
  background-color: #2f3542;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  width: 1280px;
  height: 170px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 0px 20px;
  box-sizing: border-box;
  text-align: left;
  font-size: 60px;
  color: #fff;
  font-family: Inter;
`;

const Header: FunctionComponent = () => {
  return (
    <Property1defaultRoot>
      <Box>
        <Content>
          <Logo>
            <Div>🥷</Div>
            <Shaonline>ShaOnline</Shaonline>
          </Logo>
          <Search>
            <Searchinput>
              <SearchinputInner>
                <GroupParent>
                  <GroupIcon alt="" src="/group1.svg" />
                  <SearchBujinkansByContainer>
                    Search bujinkan’s by name, sensei or subjec
                    <T>t…</T>
                  </SearchBujinkansByContainer>
                </GroupParent>
              </SearchinputInner>
            </Searchinput>
            <Filters>
              <Calendar1>
                <Div>{`From 5/20/2023 `}</Div>
                <IconArrowDown1 alt="" src="/-icon-arrow-down-11.svg" />
              </Calendar1>
              <Calendar1>
                <Div>{`To 7/15/2023 `}</Div>
                <IconArrowDown1 alt="" src="/-icon-arrow-down-11.svg" />
              </Calendar1>
              <Checkbox1>
                <IconMoreSquare alt="" src="/-icon-more-square.svg" />
                <Div>Joined</Div>
              </Checkbox1>
            </Filters>
          </Search>
          <AccountIcon alt="" src="/account1.svg" />
        </Content>
      </Box>
    </Property1defaultRoot>
  );
};

export default Header;
