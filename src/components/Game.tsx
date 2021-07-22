import {useEffect, useState} from 'react';
import {BoxRow, Box} from './styled/Containers';
import {CrossIcon, ZeroIcon} from './styled/Elements';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {addBoxValue, addStrike, addWinner, refreshState}
  from '../redux/mainSlice';
import {calculateWinner} from '../utilities/helper';
import {Button} from 'react-bootstrap';

function Game() {
  const appState = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();
  const [winner, setWinner] = useState({player: '', line: [-1, -1, -1]});
  const [boxes, setBoxes] = useState(
      [true, true, true, true, true, true, true, true, true]
  );

  useEffect(() => {
    let interval:NodeJS.Timeout;
    if (winner.player === '') {
      const calWinner = calculateWinner(appState.boxes);
      if (calWinner !== null) {
        const squares = [...boxes];
        squares[calWinner.line[0]] = false;
        squares[calWinner.line[1]] = false;
        squares[calWinner.line[2]] = false;
        setBoxes(squares);
        setWinner(calWinner);
        dispatch(addWinner(calWinner.player));
      }
    } else {
      interval = setInterval(function() {
        setBoxes((prevState) => {
          const squares = [...prevState];
          squares[winner.line[0]] = !prevState[winner.line[0]];
          squares[winner.line[1]] = !prevState[winner.line[1]];
          squares[winner.line[2]] = !prevState[winner.line[2]];
          return squares;
        });
      }, 400);
    }
    return () => clearInterval(interval);
  }, [appState.lastPos, winner]);

  function getIcon(index:number) {
    if (appState.boxes[index] === 1) {
      return <ZeroIcon />;
    } else if (appState.boxes[index] === -1) {
      return <CrossIcon />;
    } else {
      null;
    }
  }

  function onClickHandler(index:number) {
    const value = appState.strike%2 === 0 ? -1:1;
    const payload = {index, value};
    if (winner.player === '' &&
      appState.strike<9 && appState.boxes[index]===0) {
      dispatch(addBoxValue(payload));
      dispatch(addStrike());
    }
  }

  function handleRestart() {
    dispatch(refreshState());
    setWinner({player: '', line: [-1, -1, -1]});
    setBoxes([true, true, true, true, true, true, true, true, true]);
  }

  return (
    <>
      <BoxRow>
        <Box
          xs={4}
          right={true}
          onClick={()=>{
            onClickHandler(0);
          }}
        >
          {boxes[0] && getIcon(0)}
        </Box>
        <Box
          xs={4}
          onClick={()=>{
            onClickHandler(1);
          }}
        >
          {boxes[1] && getIcon(1)}
        </Box>
        <Box
          xs={4}
          left={true}
          onClick={()=>{
            onClickHandler(2);
          }}
        >
          {boxes[2] && getIcon(2)}
        </Box>
      </BoxRow>
      <BoxRow>
        <Box
          xs={4}
          top={true}
          right={true}
          bottom={true}
          onClick={()=>{
            onClickHandler(3);
          }}
        >
          {boxes[3] && getIcon(3)}
        </Box>
        <Box
          xs={4}
          top={true}
          bottom={true}
          onClick={()=>{
            onClickHandler(4);
          }}
        >
          {boxes[4] && getIcon(4)}
        </Box>
        <Box
          xs={4}
          top={true}
          bottom={true}
          left={true}
          onClick={()=>{
            onClickHandler(5);
          }}
        >
          {boxes[5] && getIcon(5)}
        </Box>
      </BoxRow>
      <BoxRow>
        <Box
          xs={4}
          right={true}
          onClick={()=>{
            onClickHandler(6);
          }}
        >
          {boxes[6] && getIcon(6)}
        </Box>
        <Box
          xs={4}
          onClick={()=>{
            onClickHandler(7);
          }}
        >
          {boxes[7] && getIcon(7)}
        </Box>
        <Box
          xs={4}
          left={true}
          onClick={()=>{
            onClickHandler(8);
          }}
        >
          {boxes[8] && getIcon(8)}
        </Box>
      </BoxRow>
      <br />
      <Button onClick={()=>{
        handleRestart();
      }}>
        Restart Game
      </Button>
    </>
  );
}

export default Game;
