import { useState } from "react";
import produce from 'immer';
// import ListGroup from "./components/ListGroup";
// import { BsFillCalendarFill } from 'react-icons/bs';
import Button from "./components/Button";
import './App.css';


function App() {
  // const [isVisible, setVisibility] = useState(false);
  // const [isApproved, setApproved] = useState(true);

  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', fixed: false},
    { id: 2, title: 'Bug 2', fixed: false},
  ]);

  const handleClick = () => {
    // setBugs(bugs.map(m => m.id === 1 ? { ...m, fixed: true } : m));

    setBugs(produce(draft => {
      const bug = draft.find(f => f.id === 1);
      if (bug) bug.fixed = true;
    }));
  };

  return (
    // <div>
    //   { showAlert && <Alert onClose={() => setShowAlert(false)}>Alertăăăăă</Alert> }
    //   <Button color="secondary" onClick={() =>{
    //       setShowAlert(true);
    //     }}>
    //     Apasă pe <i>mine!!</i>
    //   </Button>
    // </div>

    // <div>
    //   {/* <ListGroup
    //     items={['Albania', 'România', 'Italia', 'Franța']}
    //     heading='Țări din Europa'
    //     onSelectItem={(item) => { console.log('item: ', item) }}
    //   ></ListGroup> */}
    //   {/* <BsFillCalendarFill color='blue' size='40'/> */}
    // </div>

    <div>
      {bugs.map(bug => <p key={bug.id}>
        {bug.title} {bug.fixed ? 'Fixed' : 'New'};
      </p>)}
      <Button onClick={handleClick}>My Button</Button>
    </div>
    // <div>
    //   <Message></Message>
    //   <Message></Message>
    //   <Message></Message>
    // </div>
  );
}

export default App;