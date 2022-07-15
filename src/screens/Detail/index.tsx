import React, { useState, useEffect } from 'react';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { Linking } from 'react-native';
// import api from '../../services/api';
import * as MailComposer from 'expo-mail-composer';

import {
      Safe,
      Container,
      Button,
      PointImage,
      PointName,
      PointItems,
      Address,
      AddressTitle,
      AddressContent,
      Footer,
      ContactButton,
      ButtonText,
} from './styles';

import { points } from '../../utils/points';
import { items } from '../../utils/items';

interface Params {
      point_id: number;
}

interface Data {
      point: {
            image: string;
            image_url: string;
            name: string;
            email: string;
            whatsapp: string;
            city: string;
            uf: string;
      };
      items: {
            title: string;
      }[];
}

interface Point {
      id: number;
      name: string;
      city: string;
      uf: string;
      image_url: string;
      latitude: number;
      longitude: number;
      items: Number[];
}

interface Item {
      id: number;
      title: string;
      image_url: string;
}

export function Detail({ navigation, route }) {

      const [data, setData] = useState<Data>({} as Data);
      const [point, setPoint] = useState<Point>({} as Point);
      const [pointItems, setPointItems] = useState<Item[]>([]);

      const routeParams = route.params as Params;
      const id = routeParams.point_id;

      // useEffect(() => {
      //       api.get(`points/${routeParams.point_id}`).then(response => {
      //             setData(response.data);
      //       });
      // }, []);

      useEffect(() => {
            let filteredItems = [];
            setPoint(points[id]);
            points[id].items.map(pointItem => {
                  items.map(item => {
                        if(pointItem === item.id) filteredItems.push(item.title);
                  })
            });

            setPointItems(filteredItems);
            console.log(pointItems);
      }, []);

      function handleBackButton() {
            navigation.goBack();
      }

      function handleComposeWhatsapp() {
            Linking.openURL(`https://api.whatsapp.com/send?phone=55${data.point.whatsapp}&text=Tenho interesse sobre coleta de resíduos`);
      }

      function handleComposeMail() {
            MailComposer.composeAsync({
                  subject: 'Interesse na coleta de resíduos',
                  recipients: [data.point.email],
            });
      }

      // if (!data.point) return null;
      if (![point]) return null;

      return (
            <Safe>
                  <Container>
                        <Button onPress={handleBackButton}>
                              <Icon
                                    name="arrow-left"
                                    size={20}
                                    color="#34cb79"
                              />
                        </Button>

                        <PointImage source={ point.image_url } />
                        <PointName>{point.name}</PointName>
                        <PointItems>{pointItems.map(item => item).join(', ')}</PointItems>

                        <Address>
                              <AddressTitle>Endereço</AddressTitle>
                              <AddressContent>{point.city} / {point.uf}</AddressContent>
                        </Address>
                  </Container>
                  <Footer>
                        <ContactButton onPress={handleComposeWhatsapp}>
                              <FontAwesome name="whatsapp" size={20} color="#FFF" />
                              <ButtonText>Whatsapp</ButtonText>
                        </ContactButton>

                        <ContactButton onPress={handleComposeMail}>
                              <Icon name="mail" size={20} color="#FFF" />
                              <ButtonText>E-mail</ButtonText>
                        </ContactButton>
                  </Footer>
            </Safe>
      );

}
