import styled from 'styled-components';
import {Close, ExposureZero} from '@material-ui/icons';
import {RED, GREEN} from '../../constants/colors';

export const CrossIcon = styled(Close)`
  height: 100% !important;
  width: 100% !important;
  color: ${RED};
`;

export const ZeroIcon = styled(ExposureZero)`
  height: 100% !important;
  width: 100% !important;
  color: ${GREEN};
`;

export const RoundIcon = styled.span`
  height: 25px;
  width: 25px;
  margin-left: 5px;
  background-color: ${(p:any) => p.color};;
  border-radius: 50%;
  display: inline-block;
`;

export const Title = styled.span`
  font-weight: bold;
  padding-right: 10px;
`;

export const StickyBoard = styled.p`
  bottom: 0px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  padding: 5px;
  margin-top: 15px;
  background-color: bisque;
`;
