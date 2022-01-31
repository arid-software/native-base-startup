import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import UserProfileScreen from './UserProfileScreen';
import QRCode from './QRCode';
import SellerDetailPage from '../UserDetails/SellerDetailPage';

import TutorProfile from '../UserDetails/Tutorprofile';
storiesOf('UserDetails', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('QRCode', () => <QRCode />)
  .add('TutorProfile', () => <TutorProfile />)
  .add('SellerDetailPage', () => <SellerDetailPage />)
  .add('UserProfileScreen', () => <UserProfileScreen />);
