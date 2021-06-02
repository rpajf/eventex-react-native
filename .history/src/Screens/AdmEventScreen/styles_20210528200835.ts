import styled from 'styled-components/native';
import {View} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Button from '../../components/Button';

export const Container = styled(View)`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.backgroundDark};
  /* padding: 0 ${RFValue(15)}px 0 ${RFValue(15)}px; */
  padding: ${RFValue(25)}px ${RFValue(20)}px 0;
`;

export const InfoViewWrapper = styled.View`
  flex-direction: row;
`;

export const SubmitButton = styled(Button)`
  width: ${RFPercentage(55)}px;
  height: ${RFValue(67)}px;
  padding: ${RFValue(8)}px 0;
  margin-top: ${RFValue(8)}px;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.backgroundMedium};
`;
export const EventImg = styled.Image`
  width: ${RFPercentage(20)}px;
  height: ${RFPercentage(22.5)}px;
  border-radius: 9px;
  /* border: 18px solid rgba(0, 0, 0, 0.1); */

  margin: ${RFValue(10)}px ${RFValue(15)}px ${RFValue(10)}px 5px;
`;
export const EventSection = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ImgInfo = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(20)}px;
  font-family: 'Roboto-Bold';
  text-align: center;

  color: ${({theme}) => theme.colors.lightGray};
`;

export const EventSubscribers = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const EventAdminModal = styled.View`
  /* width: ${RFPercentage(100)}px;
  height: ${RFPercentage(100)}px;
  /* flex: 1; */
  //background-color: ${({theme}) => theme.colors.attention}; 
  background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;
    display: flex;
    align-items:center;
    justify-content:center;
  }
`;
