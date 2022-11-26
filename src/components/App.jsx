import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics"
import { FriendList } from "./Friends/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from "./Profile/user.json";
import data from './Statistics/data.json';
import friends from './Friends/friends.json'
import transactions from './TransactionHistory/transactions.json'
import { GlobalStyle } from "./GlobalStyle";


export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Profile username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
