// function Message () {

//   if(getName()) {
//     return <h1>Hello {getName()}</h1>;
//   }
//   return <h1>Nu s-a gasit denumirea utilizatorului</h1>
// }

// function getName () {
//   const name = "Costi";
//   return name;
// }
let count = 0;

const Message = () => {
  console.log('Message logged: ', count);
  count++;
  return <div><h1>Message {count}</h1></div>
};

export default Message;