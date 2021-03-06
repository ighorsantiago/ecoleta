import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import MapView, { Marker } from 'react-native-maps';

export const Container = styled.View`
      flex: 1;
      padding: 0 32px;
`;

export const Button = styled(RectButton)``;

export const Title = styled.Text`
      font-size: 20px;
      /* font-family: 'Ubuntu_700Bold'; */
      margin-top: 24px;
`;

export const Description = styled.Text`
      color: #6C6C80;
      font-size: 16px;
      margin-top: 4px;
      /* font-family: 'Roboto_400Regular'; */
`;

export const MapContainer = styled.View`
      flex: 1;
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
      margin-top: 16px;
`;

export const Map = styled(MapView)`
      width: 100%;
      height: 100%;
`;

export const MapMarker = styled(Marker)`
      width: 90px;
      height: 80px; 
`;

export const MapMarkerContainer = styled.View`
      width: 90px;
      height: 70px;
      background-color: #34CB79;
      flex-direction: column;
      border-radius: 8px;
      overflow: hidden;
      align-items: center;
`;

export const MapMarkerImage = styled.Image`
      width: 100%;
      height: 65%;
      /* resize: both; */
`;

export const MapMarkerTitle = styled.Text`
      flex: 1;
      /* font-family: 'Roboto_400Regular'; */
      color: #FFF;
      font-size: 13px;
      line-height: 23px;
`;

export const ItemsContainer = styled.View`
      width: 100%;
      height: 150px;
      flex-direction: row;
      margin-top: 16px;
      margin-bottom: 32px;
`;

export const ItemsScroll = styled.ScrollView``;

export const Item = styled(RectButton)`
      height: 120px;
      width: 120px;
      
      align-items: center;
      justify-content: space-between;
      
      border-width: 2px;
      border-color: #EEE;
      border-radius: 8px;
      padding: 0 16px;
      padding-top: 20px;
      padding-bottom: 16px;
      margin-right: 8px;
      
      text-align: center;
      
      background-color: #FFF;
`;

export const ItemImage = styled.Image`
      width: 42px;
      height: 42px;
`;

export const ItemTitle = styled.Text`
      /* font-family: 'Roboto_400Regular'; */
      text-align: center;
      font-size: 13px;
`;
