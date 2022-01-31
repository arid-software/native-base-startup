import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import Playlist from './Playlist';
import PodcastScreen from './PodcastScreen';
import VideoLibrary from './VideoLibrary';
storiesOf('PlaylistAndPodcast', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Playlist', () => <Playlist />)
  .add('VideoLibrary', () => <VideoLibrary />)
  .add('PodcastScreen', () => <PodcastScreen />);
