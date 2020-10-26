import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, View, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';

import mapMarkerImg from '../../assets/images/map-marker.png';

import * as S from './styles';
import api from '../../services/api';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface OrphanageDetailsRouteParams {   
  id: number;  
}

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: number;
    url: string;
  }>
}

export default function OrphanageDetails() {
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const route = useRoute();

  const params = route.params as OrphanageDetailsRouteParams;

  useEffect(() => {
    const fetchOrphanage = async () => {
      const response = await api.get(`orphanages/${params.id}`);
      setOrphanage(response.data);
    }
    fetchOrphanage();
  }, [params.id])

  const handleOpenGoogleMapsRoutes = () => {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude}, ${orphanage?.longitude}`)
  }

  if (!orphanage) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <ActivityIndicator size="large" color="#FFD666" /> 
      </View>
    )
  }

  return (
    <S.Container>
      <S.ImagesContainer>
        <ScrollView horizontal pagingEnabled>
          {orphanage.images.map(image => (
            <S.Image key={image.id} source={{ uri: image.url }} />
          ))}
        </ScrollView>
      </S.ImagesContainer>

      <S.DetailsContainer>
        <S.Title>{orphanage.name}</S.Title>
        <S.Description>{orphanage.about}</S.Description>
      
        <S.MapContainer>
          <MapView 
            initialRegion={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }} 
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={{
              width: '100%',
              height: 150
            }}
          >
            <Marker 
              icon={mapMarkerImg}
              coordinate={{ 
                latitude: orphanage.latitude,
                longitude: orphanage.longitude
              }}
            />
          </MapView>

          <S.RoutesContainer>
            <TouchableOpacity onPress={handleOpenGoogleMapsRoutes}>
              <S.RoutesText>Ver rotas no Google Maps</S.RoutesText>
            </TouchableOpacity>
          </S.RoutesContainer>
        </S.MapContainer>
      
        <S.Separator />

        <S.Title>Instruções para visita</S.Title>
        <S.Description>{orphanage.instructions}</S.Description>

        <S.ScheduleContainer>
          <S.ScheduleItemBlue>
            <Feather name="clock" size={40} color="#2AB5D1" />
            <S.ScheduleTextBlue>Segunda à Sexta {orphanage.opening_hours}</S.ScheduleTextBlue>
          </S.ScheduleItemBlue>
          {orphanage.open_on_weekends ? (
            <S.ScheduleItemGreen>
              <Feather name="info" size={40} color="#39CC83" />
              <S.ScheduleTextGreen>Atendemos fim de semana</S.ScheduleTextGreen>
            </S.ScheduleItemGreen> ) 
          : (
            <S.ScheduleItemRed>
              <Feather name="info" size={40} color="#FF669D" />
              <S.ScheduleTextRed>Não atendemos fim de semana</S.ScheduleTextRed>
            </S.ScheduleItemRed>
          )}
        </S.ScheduleContainer>        
      </S.DetailsContainer>
    </S.Container>
  )
}