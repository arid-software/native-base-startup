import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import NewsLetter from './Newsletter';
import Feed from './Feed';
storiesOf('NewsAndFeed', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Feed ', () => <Feed />)
  .add('NewsLetter', () => <NewsLetter />);
