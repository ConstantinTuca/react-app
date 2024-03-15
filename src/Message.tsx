function Message () {

  if(getName()) {
    return <h1>Hello {getName()}</h1>;
  }
  return <h1>Nu s-a gasit denumirea utilizatorului</h1>
}

function getName () {
  const name = "Costi";
  return name;
}

export default Message;