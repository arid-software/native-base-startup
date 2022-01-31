import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import RateUs from './RateUs';
import HomeScreen from './HomeScreen';
import EmptyPlaylist from './EmptyPlaylist';
import NoInternet from './NoInternet';
import SideNavigationDrawer from './SideNavigationDrawer';

storiesOf('HomeAndMenu', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('EmptyPlaylist', () => <EmptyPlaylist />)
  .add('HomeScreen', () => <HomeScreen />)
  .add('RateUs', () => <RateUs />)
  .add('NoInternet', () => <NoInternet />)
  .add('SideNavigationDrawer', () => <SideNavigationDrawer />);
