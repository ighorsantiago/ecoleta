import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Safe = styled.SafeAreaView`
      flex: 1;
`;

export const Container = styled.View`
      flex: 1;
      padding: 32px;
`;

export const Button = styled(TouchableOpacity)``;

export const PointImage = styled.Image`
      width: 100%;
      height: 120px;
      /* resizeMode: 'cover'; */
      border-radius: 10px;
      margin-top: 32px;
`;

export const PointName = styled.Text`
      color: #322153;
      font-size: 28px;
      /* fontFamily: 'Ubuntu_700Bold'; */
      margin-top: 24px;
`;

export const PointItems = styled.Text`
      /* fontFamily: 'Roboto_400Regular'; */
      font-size: 16px;
      line-height: 24px;
      margin-top: 8px;
      color: #6C6C80;
`;

export const Address = styled.View`
      /* margin-top: 32px; */
`;

export const AddressTitle = styled.Text`
      color: #322153;
      /* fontFamily: 'Roboto_500Medium'; */
      font-size: 16px;
`;

export const AddressContent = styled.Text`
      /* fontFamily: 'Roboto_400Regular'; */
      line-height: 24px;
      margin-top: 8px;
      color: #6C6C80;
`;

export const Footer = styled.View`
      // border-top-width: StyleSheet.hairlineWidth;
      border-color: #999;
      padding: 20px 32px;
      flex-direction: row;
      justify-content: space-between;
`;

export const ContactButton = styled(RectButton)`
      width: 48%;
      height: 50px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      background-color: #34CB79;
`;

export const ButtonText = styled.Text`
      margin-left: 8px;
      color: #FFF;
      font-size: 16px;
      /* fontFamily: 'Roboto_500Medium'; */
`;
