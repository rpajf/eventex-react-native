import styled from 'styled-components/native';

export const Container = styled.View`

  flex-direction: column;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
`;

// export const HomeImage = styled.ImageBackground`
//   width: 100%;
//   height: ${RFPercentage(65)}px;
// `;
