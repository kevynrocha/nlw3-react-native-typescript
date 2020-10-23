import React from 'react';
import { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

import mapMarker from '../../assets/images/map-marker.png';
import { Container, Map, CalloutContainer, CalloutText, Footer, FooterText, CreateOrphanageButton } from './styles';

const OrphanageMap: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToOrphanageDetails = () => {    
    navigation.navigate('OrphanageDetails')
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
        <Marker 
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8
          }}
          coordinate={{
            latitude: -20.5227256,
            longitude: -54.6424034,
          }}
        >
          <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
            <CalloutContainer>
            <CalloutText>Lar das meninas</CalloutText>
            </CalloutContainer>
          </Callout>
        </Marker>
      </Map>

      <Footer>
        <FooterText>2 orfanatos encontrados</FooterText>
        <CreateOrphanageButton>
          <Feather name="plus" size={20} color="#fff"  />
        </CreateOrphanageButton>
      </Footer>
    </Container>
  );
};

export default OrphanageMap;
