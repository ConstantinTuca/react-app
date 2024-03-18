import ListGroup from "./components/ListGroup";
const items = [
  'New york',
  'Constanta',
  'Bucuresti',
  'Suceava'
];

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}></ListGroup></div>
}

export default App;