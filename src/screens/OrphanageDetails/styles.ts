import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ImagesContainer = styled.View`
  height: 240px;
`;

export const Image = styled.Image`
  width: ${Dimensions.get('window').width};
  height: 240px;
  resize-mode: cover;
`;

export const DetailsContainer = styled.View`
  padding: 24px;
`;

export const Title = styled.Text`
  color: #4D6F80;
  font-size: 30px;
  font-family: 'Nunito_700Bold';
`;

export const Description = styled.Text`
  font-family: 'Nunito_600SemiBold';
  color: #5c8599;
  line-height: 24px;
  margin-top: 16px;
`;

export const MapContainer = styled.View`
  border-radius: 20px;
  overflow: hidden;
  border-width: 1.2px;
  border-color: #B3DAE2;
  margin-top: 40px;
  background-color: #E6F7FB;
`;

export const RoutesContainer = styled.View`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const RoutesText = styled.Text`
  font-family: 'Nunito_700Bold';
  color: #0089a5;
`;

export const Separator = styled.View`  
  height: 0.8px;
  width: 100%;
  background-color: #D3E2E6;
  margin: 40px 0;  
`;

export const ScheduleContainer = styled.View`  
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between; 
`;

export const ScheduleItem = styled.View`  
  width: 48%;
  padding: 20px;
  border-width: 1px;
  border-radius: 20px;
`;

export const ScheduleItemBlue = styled(ScheduleItem)`
  background-color: #E6F7FB;  
  border-color: #B3DAE2;  
`;

export const ScheduleItemGreen = styled(ScheduleItem)`
  background-color: #EDFFF6;
  border-color: #A1E9C5;
`;

export const ScheduleItemRed = styled(ScheduleItem)`
  background-color: #FFE4EE;
  border-color: #FF669D;
`;

export const ScheduleText = styled.Text`  
  font-family: 'Nunito_600SemiBold';
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
`;

export const ScheduleTextBlue = styled(ScheduleText)`  
  color: #5C8599;
`;

export const ScheduleTextGreen = styled(ScheduleText)`  
  color: #37C77F;
`;

export const ScheduleTextRed = styled(ScheduleText)`  
  color: #FF669D;
`;