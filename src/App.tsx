import ListGroup from "./components/ListGroup";
import './App.css';


function App() {

  return (
    // <div>
    //   { showAlert && <Alert onClose={() => setShowAlert(false)}>Alertăăăăă</Alert> }
    //   <Button color="secondary" onClick={() =>{
    //       setShowAlert(true);
    //     }}>
    //     Apasă pe <i>mine!!</i>
    //   </Button>
    // </div>

    <div>
      <ListGroup
        items={['Albania', 'România', 'Italia', 'Franța']}
        heading='Țări din Europa'
        onSelectItem={(item) => { console.log('item: ', item) }}
      ></ListGroup>
    </div>
  );
}

export default App;