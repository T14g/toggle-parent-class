import List from "./components/List";

const mockedData = [
  {
    'name': 'car',
    'color': 'blue'
  },
  {
    'name': 'rocket',
    'color': 'red'
  },
  {
    'name': 'bike',
    'color': 'green'
  }
];

function App() {
  return (
    <div>
      <List items={mockedData} />
    </div>
  );
}

export default App;
