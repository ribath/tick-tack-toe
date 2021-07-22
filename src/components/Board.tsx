import {GREEN, RED} from '../constants/colors';
import {useAppSelector} from '../redux/hooks';
import {BoardRow} from './styled/Containers';
import {RoundIcon, StickyBoard, Title} from './styled/Elements';

function Board() {
  const appState = useAppSelector((state) => state.appState);

  function getColor(player:number, index:number) {
    const x = index*2;
    if (player === 1 && appState.strike > x) {
      return RED;
    } else if (player === 2 && appState.strike > x+1) {
      return GREEN;
    } else {
      return 'lightgrey';
    }
  }

  function getStickyText() {
    if (appState.strike>0) {
      const player = appState.strike%2 === 1 ? 'Player 1':'Player 2';
      const row = Math.floor(appState.lastPos/3) + 1;
      const col = appState.lastPos%3 + 1;
      return `${player} Selected Row ${row}, Column ${col}`;
    } else {
      return `nothing selected`;
    }
  }

  return (
    <>
      <BoardRow>
        <Title>Player 1 : </Title>
        <RoundIcon color={getColor(1, 0)} />
        <RoundIcon color={getColor(1, 1)} />
        <RoundIcon color={getColor(1, 2)} />
        <RoundIcon color={getColor(1, 3)} />
        <RoundIcon color={getColor(1, 4)} />
      </BoardRow>
      <BoardRow>
        <Title>Player 2 : </Title>
        <RoundIcon color={getColor(2, 0)} />
        <RoundIcon color={getColor(2, 1)} />
        <RoundIcon color={getColor(2, 2)} />
        <RoundIcon color={getColor(2, 3)}/>
      </BoardRow>
      <StickyBoard>
        {getStickyText()}
      </StickyBoard>
    </>
  );
}

export default Board;
