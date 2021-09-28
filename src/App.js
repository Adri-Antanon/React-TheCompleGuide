import { AddUser, UserList } from "./components/Users";

function App() {
  return (
    <div>
      <AddUser />
      <UserList users={[]} />
    </div>
  );
}

export default App;
