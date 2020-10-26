import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Container, Title } from './styles';
import { View } from 'react-native';

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showCancel = true }: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <Container>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>
      <Title>{title}</Title>
      { showCancel 
        ? ( 
          <BorderlessButton onPress={() => navigation.navigate('OrphanagesMap')}>
            <Feather name="x" size={24} color="#ff669d" />
          </BorderlessButton>
          ) 
        : <View /> }
    </Container>
  );
};

export default Header;
