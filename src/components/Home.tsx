import {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {useWindowSize} from 'react-use';
import Confetti from 'react-confetti';
import {useAppSelector} from '../redux/hooks';
import Game from './Game';
import Board from './Board';
import {BlinkRow} from './styled/Containers';

function Home() {
  const appState = useAppSelector((state) => state.appState);
  const [pulse, setPulse] = useState(true);
  const {width, height} = useWindowSize();

  useEffect(() => {
    const interval = setInterval(function() {
      setPulse((prevState) => !prevState);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  function showTurn() {
    if (appState.winner === '') {
      let text = appState.strike%2 === 0 ? 'Player 1 Strike':'Player 2 Strike';
      text = appState.strike >= 9 ? 'Game Over':text;
      return (
        pulse && <h2>{text}</h2>
      );
    } else {
      return (
        pulse && <h2>{`${appState.winner} Won this Game`}</h2>
      );
    }
  }

  return (
    <Container>
      <br />
      <br />
      <Row>
        <Col xs={2} sm={3} md={4} />
        <Col xs={8} sm={6} md={4}>
          <Game />
        </Col>
        <Col xs={2} sm={3} md={4} />
      </Row>
      <br />
      <BlinkRow>
        {showTurn()}
      </BlinkRow>
      <Row>
        <Board />
      </Row>
      {
        appState.winner!=='' &&
        <Confetti
          width={width}
          height={height}
        />
      }
    </Container>
  );
}

export default Home;
