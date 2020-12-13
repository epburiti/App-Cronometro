import styled from 'styled-components/native';

import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');

export const NavBar = styled.View`
  height: 10%;
  background: #1d3557;
  justify-content:center;
  align-items:center;
`;
export const TextCustom = styled.Text`
  font-size:16px;
  font-weight:bold;
  color:white;
`;
export const TextCustomChronometer = styled.Text`
  font-size:22px;
  font-weight:bold;
  color:white;
`;

export const ContainerChronometer = styled.View`
  min-height: 90%;
  justify-content:center;
  align-items:center;
  background:  #457b9d;
`;

export const Container = styled.View`
  min-height: ${height}px;
`;
export const ContainerButtons = styled.View`
 position:absolute;
 bottom:80px;
 width:100%;
 flex-direction:row;
 justify-content:space-around;
`;
export const CustomButton = styled.TouchableOpacity`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;

  height: 50px;
  background: #1d3557;
  border-radius: 999px;
`;

