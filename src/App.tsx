import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";


function App() {
  //Hook
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      { showAlert && <Alert onClose={() => setShowAlert(false)}>Alertăăăăă</Alert> }
      <Button color="secondary" onClick={() =>{
          setShowAlert(true);
        }}>
        Apasă pe <i>mine!!</i>
      </Button>
    </div>
  );
}

export default App;