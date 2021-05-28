import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(View)`
display: flex;
flex-direction: column;
flex: 1;
align-items: center;
background-color: ${props => props.theme.colors.backgroundDark};
`;
