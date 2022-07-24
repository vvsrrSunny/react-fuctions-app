import logo from './logo.svg';
import './App.css';
import AppLayout from'./components/AppLayout';
import UsersTable from './components/UsersTable';

function App() {
  return (
    <div className="App">
      <AppLayout>
        <UsersTable></UsersTable>
      </AppLayout>
    </div>
  );
}

export default App;
