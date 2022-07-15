import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, SafeAreaView, Alert } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import * as Location from 'expo-location';
// import api from '../../services/api';

import {
      Container,
      Button,
      Title,
      Description,
      MapContainer,
      Map,
      MapMarker,
      MapMarkerContainer,
      MapMarkerImage,
      MapMarkerTitle,
      ItemsContainer,
      ItemsScroll,
      Item,
      ItemImage,
      ItemTitle,
} from './styles';

import { items } from '../../utils/items';
import { points } from '../../utils/points';

interface Item {
      id: number;
      title: string;
      image_url: string;
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

interface Params {
      uf: string;
      city: string;
}

export function Points({ navigation, route }) {

      // const [items, setItems] = useState<Item[]>([]);
      // const [points, setPoints] = useState<Point[]>([]);
      const [formattedPoints, setFormattedPoints] = useState<Point[]>([]);
      const [selectedItems, setSelectedItems] = useState<number[]>([]);

      const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

      const routeParams = route.params as Params;

      // Localização
      useEffect(() => {
            async function loadPosition() {
                  const { status } = await Location.requestForegroundPermissionsAsync();

                  if (status !== 'granted') {
                        Alert.alert('Ooooops...', 'Precisamos de sua permissão para obter a localização');
                        return;
                  }

                  const location = await Location.getCurrentPositionAsync();

                  const { latitude, longitude } = location.coords;

                  setInitialPosition([latitude, longitude])
            }

            loadPosition();
      }, [selectedItems]);

      // Pontos
      useEffect(() => {
            let newPoints = [];

            points.filter(point => {
                  selectedItems.map(item => {
                        
                        if(point.items.includes(item)) {
                              // console.log("Item:", item)
                              // console.log("Ponto:", point)
                              newPoints.push(point)
                        }
                  });
            });

            const filteredPoints = newPoints.filter(
                  (elem, i, arr) => arr.indexOf(elem) === i
            );

            // if (selectedItems.length === 0) setFormattedPoints([]);

            console.log(newPoints);
            setFormattedPoints(filteredPoints);
      }, [selectedItems]);

      function handleBackButton() {
            navigation.goBack();
      }

      function handleNavigateToDetail(id: number) {
            navigation.navigate('Detail', { point_id: id });
      }

      function handleSelectedItem(id: number) {
            const alreadySelected = selectedItems.findIndex(item => item === id);

            if (alreadySelected >= 0) {
                  const filteredItems = selectedItems.filter(item => item !== id);
                  setSelectedItems(filteredItems);
            }
            else {
                  setSelectedItems([...selectedItems, id]);
            }
      }

      return (
            <SafeAreaView style={{ flex: 1 }}>
                  <Container>
                        <Button onPress={handleBackButton}>
                              <Icon
                                    name="arrow-left"
                                    size={20}
                                    color="#34cb79"
                              />
                        </Button>

                        <Title>Bem vindo.</Title>
                        <Description>Encontre no mapa um ponto de coleta.</Description>

                        <MapContainer>
                              {initialPosition[0] !== 0 && (
                                    <Map
                                          loadingEnabled={initialPosition[0] === 0}
                                          initialRegion={{
                                                latitude: initialPosition[0],
                                                longitude: initialPosition[1],
                                                latitudeDelta: 0.014,
                                                longitudeDelta: 0.014,
                                          }}
                                    >
                                          {formattedPoints.map(point => (
                                                <MapMarker
                                                      key={String(point.id)}
                                                      onPress={() => handleNavigateToDetail(point.id)}
                                                      coordinate={{
                                                            latitude: point.latitude,
                                                            longitude: point.longitude,
                                                      }}
                                                >
                                                      <MapMarkerContainer>
                                                            <MapMarkerImage source={point.image_url} />
                                                            <MapMarkerTitle>{point.name}</MapMarkerTitle>
                                                      </MapMarkerContainer>
                                                </MapMarker>
                                          ))}
                                    </Map>
                              )}
                        </MapContainer>
                  </Container>

                  <ItemsContainer>
                        <ItemsScroll
                              horizontal
                              showsHorizontalScrollIndicator={false}
                              contentContainerStyle={{ paddingHorizontal: 20 }}
                        >
                              {items.map(item => (
                                    <Item
                                          key={String(item.id)}
                                          style={[
                                                selectedItems.includes(item.id) ? styles.selectedItem : {}
                                          ]}
                                          onPress={() => handleSelectedItem(item.id)}
                                          activeOpacity={0.6}
                                    >
                                          <ItemImage source={item.image_url} />
                                          <ItemTitle>{item.title}</ItemTitle>
                                    </Item>
                              ))}
                        </ItemsScroll>
                  </ItemsContainer>
            </SafeAreaView>
      );
}

const styles = StyleSheet.create({
      selectedItem: {
            borderColor: '#34CB79',
            borderWidth: 2,
      },
});
