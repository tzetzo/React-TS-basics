import UserSearch from './classes/UserSearch';

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

function App() {
  return (
      <div>
        <h1>Vite + React</h1>
        <UserSearch users={users} />
      </div>
  );
}

export default App;
