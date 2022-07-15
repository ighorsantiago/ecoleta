import React, { useState, useEffect } from 'react';
import { ImageBackground, Image, StyleSheet } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons'

import {
      Container,
      Main,
      Title,
      Description,
      Footer,
      Select,
      Input,
      Button,
      ButtonIcon,
      ButtonText,
      InputIOS,
      InputAndroid,
} from './styles';

import RNPicker, { Item as PItem } from 'react-native-picker-select';
import axios from 'axios';

interface IBGEUF {
      sigla: string;
}

interface IBGECity {
      nome: string;
}

export function Home({ navigation }) {

      const background = require('../../assets/home-background.png');

      const [ufs, setUfs] = useState<string[]>([]);
      const [cities, setCities] = useState<string[]>([]);
      const [selectedUf, setSelectedUf] = useState('0');
      const [selectedCity, setSelectedCity] = useState('0');

      // UF
      useEffect(() => {
            axios
                  .get<IBGEUF[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
                  .then(response => {
                        const ufInitials = response.data.map(uf => uf.sigla);
                        setUfs(ufInitials);
                  });
      }, []);

      // Cidade
      useEffect(() => {
            if (selectedUf === '0') return;

            axios
                  .get<IBGECity[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
                  .then(response => {
                        const cityNames = response.data.map(city => city.nome);
                        setCities(cityNames);
                  });
      }, [selectedUf]);

      function handleNavigateToPoints() {
            navigation.navigate('Points', { uf: selectedUf, city: selectedCity });
            setSelectedUf('0');
            setSelectedCity('0');
      }

      return (
            <Container>
                  <ImageBackground
                        source={background}
                        style={styles.container}
                        imageStyle={{ width: 274, height: 368 }}
                  />
                  <Main>
                        <Image source={require('../../assets/logo.png')} />
                        <Title>Seu marketplace de coleta de resíduos</Title>
                        <Description>Ajudamos pessoas a encontrarem pontos de coleta de forma eiciente.</Description>
                  </Main>

                  <Footer>
                        <>
                              <RNPicker
                                    style={pickerSelectStyles}
                                    placeholder={{
                                          label: 'Selecione um estado',
                                          value: '0'
                                    }}
                                    value={selectedUf}
                                    onValueChange={ufPicked => setSelectedUf(ufPicked)}
                                    items={ufs.map(uf => {
                                          return {
                                                label: uf,
                                                value: uf,
                                          }
                                    })}
                              />
                        </>

                        <>
                              <RNPicker
                                    style={pickerSelectStyles}
                                    placeholder={{
                                          label: 'Selecione uma cidade',
                                          value: '0'
                                    }}
                                    value={selectedCity}
                                    onValueChange={cityPicked => setSelectedCity(cityPicked)}
                                    items={cities.map(city => {
                                          return {
                                                label: city,
                                                value: city,
                                          }
                                    })}
                              />
                        </>

                        <Button onPress={handleNavigateToPoints}>
                              {/* <ButtonIcon>
                                          <Icon name="arrow-right" color="#FFF" size={24} />
                                    </ButtonIcon> */}
                              <ButtonText>
                                    Entrar
                              </ButtonText>
                        </Button>
                  </Footer>
            </Container>
      )
}

const pickerSelectStyles = StyleSheet.create({
      inputIOS: {
            height: 60,
            backgroundColor: '#FFF',
            borderRadius: 10,
            marginBottom: 8,
            paddingHorizontal: 24,
            fontSize: 16,
      },
      inputAndroid: {
            height: 60,
            backgroundColor: '#FFF',
            borderRadius: 10,
            marginBottom: 8,
            paddingHorizontal: 24,
            fontSize: 16,
      },
});

const styles = StyleSheet.create({

      container: {
            position: 'absolute',
            width: "100%",
            height: "100%",

            // flex: 1,
            // padding: 32,
      }
});    