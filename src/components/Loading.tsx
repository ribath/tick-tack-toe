import ReactLoading from 'react-loading';
import {LoadingContainer} from './styled/Containers';
import {Title} from './styled/Elements';

function Loading() {
  return (
    <LoadingContainer>
      <ReactLoading
        type={'spokes'}
        color={'#13bf7e'}
        height={600}
        width={300}
      />
      <Title>Loading ...</Title>
    </LoadingContainer>
  );
}

export default Loading;
