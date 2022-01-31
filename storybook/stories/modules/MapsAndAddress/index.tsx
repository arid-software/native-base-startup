import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import AddressPage from './AddressPage';
import DeliveryMethod from './DeliveryMethod';
import WeatherDisplay from './WeatherDisplay';
//@ts-ignore
import AutoDetectLocation from './AutoDetectLocation';

storiesOf('MapsAndAddress', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('AddressPage', () => <AddressPage />)
  .add('DeliveryMethod', () => <DeliveryMethod />)
  .add('WeatherDisplay', () => <WeatherDisplay />)
  .add('AutoDetectLocation', () => <AutoDetectLocation />);
