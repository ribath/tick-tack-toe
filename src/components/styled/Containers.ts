import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';

export const Box = styled(Col)`
  /* width:25%;
  padding-top:25%; */
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-color: #9584ab;

  border-left-width: ${(p:any) => p.left? '15px':''};
  border-left-style: ${(p:any) => p.left? 'inset':''};

  border-right-width: ${(p:any) => p.right? '15px':''};
  border-right-style: ${(p:any) => p.right? 'inset':''};

  border-top-width: ${(p:any) => p.top? '15px':''};
  border-top-style: ${(p:any) => p.top? 'inset':''};

  border-bottom-width: ${(p:any) => p.bottom? '15px':''};
  border-bottom-style: ${(p:any) => p.bottom? 'inset':''};
`;

export const BoxRow = styled(Row)`
  justify-content: center;
`;

export const BoardRow = styled.div`
  display: flex;
  padding: 5px;
  padding-left: 5px;
`;

export const BlinkRow = styled(Row)`
  height: 50px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;
