import ReactLoading from 'react-loading';
import {LoadingContainer} from './styled/Containers';

function Loading() {
  return (
    <LoadingContainer>
      <ReactLoading
        type={'spokes'}
        color={'#13bf7e'}
        height={600}
        width={300}
      />
      Loading ...
    </LoadingContainer>
  );
}

export default Loading;
