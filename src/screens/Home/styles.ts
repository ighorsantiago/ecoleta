import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
      flex: 1;
      padding: 32px;
`;

export const Main = styled.View`
      flex: 1;
      justify-content: center;
`;

export const Title = styled.Text`
      color: #322153;
      font-size: 32px;
      max-width: 260px;
      margin-top: 64px;
`;

export const Description = styled.Text`
      color: #6C6C80;
      font-size: 16px;
      margin-top: 16px;
      max-width: 260px;
      line-height: 24px;
`;

export const Footer = styled.View``;

export const Select = styled.View``;

export const Input = styled.TextInput`
      height: 60px;
      background-color: #FFF;
      border-radius: 10px;
      margin-bottom: 8px;
      padding: 0 24px;
      font-size: 16px;
`;

export const Button = styled(RectButton)`
      height: 60px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      overflow: hidden;
      margin-top: 8px;
      background-color: #34CB79;
`;

export const ButtonIcon = styled.View`
      height: 60px;
      width: 60px;
      align-self: left;
      justify-content: center;
      align-items: center;
`;

export const ButtonText = styled.Text`
      flex: 1;
      justify-content: center;
      font-size: 16px;
      text-align: center;
      color: #FFF;
`;


export const InputIOS = styled.TextInput`
      height: 60px;
      background-color: #FFF;
      border-radius: 10px;
      margin-bottom: 8px;
      padding: 0 24px;
      font-size: 16px;
`;

export const InputAndroid = styled.TextInput`
      height: 60px;
      background-color: #FFF;
      border-radius: 10px;
      margin-bottom: 8px;
      padding: 0 24px;
      font-size: 16px;
`;
