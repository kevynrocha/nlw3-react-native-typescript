import React, { useState } from 'react';
import { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

import api from '../../services/api';

import mapMarker from '../../assets/images/map-marker.png';
import { Container, Map, CalloutContainer, CalloutText, Footer, FooterText, CreateOrphanageButton } from './styles';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanageMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  const navigation = useNavigation();

  useFocusEffect(() => {
    const fetchOrphanages = async () => {
      const response = await api.get('orphanages');
      setOrphanages(response.data);      
    }
    fetchOrphanages();
  })

  const handleNavigateToOrphanageDetails = (id: number) => {    
    navigation.navigate('OrphanageDetails', { id })
  }
  
  const handleNavigateToCreateOrphanage = () => {    
    navigation.navigate('SelectMapPosition')
  }
  
  return (
    <Container>
      <Map 
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -20.5227256,
          longitude: -54.6424034,
          latitudeDelta: 0.0008,
          longitudeDelta: 0.0008
        }}
      >        
        {orphanages.map(orphanage => (
          <Marker 
            key={orphanage.name}
            icon={mapMarker}
            calloutAnchor={{
              x: 2.7,
              y: 0.8
            }}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
            }}
          >        
            <Callout 
              tooltip
              onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}
            >
              <CalloutContainer>
                <CalloutText>{orphanage.name}</CalloutText>
              </CalloutContainer>
            </Callout>
          </Marker>
        ))}
      </Map>

      <Footer>
        <FooterText>{orphanages.length} orfanato{orphanages.length > 1 ? 's' : ''} encontrado{orphanages.length > 1 ? 's' : ''}</FooterText>
        <CreateOrphanageButton onPress={handleNavigateToCreateOrphanage}>
          <Feather name="plus" size={20} color="#fff"  />
        </CreateOrphanageButton>
      </Footer>
    </Container>
  );
};

export default OrphanageMap;
