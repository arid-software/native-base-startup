import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import GroupChatEdit from './GroupChatEdit';
import RemoveMember from './RemoveMember';
import SearchHistory from './SearchHistory';
import ChatScreen from './ChatScreen';
import ChatList from './ChatList';
import ProductFeedback from './ProductFeedback';

import HelpAndSupport from './HelpAndSupport';
import AddOns from './AddOns';
import KeywordSearch from './KeywordSearch';
import ChatList1 from './ChatList1';
storiesOf('SupportAndFeedback', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('AddOns', () => <AddOns />)
  .add('ChatList', () => <ChatList />)
  .add('ChatList1', () => <ChatList1 />)
  .add('ChatScreen', () => <ChatScreen />)
  .add('RemoveMember', () => <RemoveMember />)
  .add('SearchHistory', () => <SearchHistory />)
  .add('GroupChatEdit', () => <GroupChatEdit />)
  .add('HelpAndSupport', () => <HelpAndSupport />)
  .add('KeywordSearch', () => <KeywordSearch />)
  .add('ProductFeedback', () => <ProductFeedback />);
