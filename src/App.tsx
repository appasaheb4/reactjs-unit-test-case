import {useState} from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState<Array<any>>([]);

  const onUserAdd = (user: any) => {
    setUsers([...users, user]);
  };
  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
