import React from 'react';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { GlobalStyles } from 'GlobalStyles';

export const App = () => {
  return (
   <div>
    <GlobalStyles />
   <Profile user={user}/>
   <Statistics title="Upload stats" stats={data}/>
   <FriendList friends={friends} />
   <TransactionHistory items={transactions} />
   </div>
   
  
  );
};
