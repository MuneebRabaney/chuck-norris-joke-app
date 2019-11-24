import React from 'react';
import styled from 'styled-components';
import dancingChuckNorris from '../../images/danceing-chuck-norris.gif';

const Container = styled.div`
  width: 650px;
  min-height: 300px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  background: #ccc;
  text-align: center;
`;

const Header = styled.h2`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  position: relative;
  &:before {
    content: '';
    width: 80%;
    height: 2px;
    background: #000;
    display: block;
    margin: 0 auto 10px auto;
  }
`;

const DanceChuckDance = styled.div`
  display: inline-block;
  background-image: url(${dancingChuckNorris});
  background-repeat: no-repeat;
  height: 50px;
  width: 50px;
  top: 3px;
  position: relative;
`;

function Main({ children }) {
  return (
    <Container>
      <DanceChuckDance />
      <Header>Chuck Norris Jokes</Header>
      {children}
    </Container>
  );
}

export default Main;
