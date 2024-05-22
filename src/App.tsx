import './App.css';
import ExpandableText from './components/ExpandableText';


function App() {

  return (
    <div>
      <ExpandableText maxChars={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit vestibulum mi, eget convallis risus lacinia a. Etiam lacinia leo pulvinar, dictum sem nec, posuere metus.
        Nunc blandit ipsum quis nisl volutpat pretium. Cras laoreet tellus quis orci ultrices, sed vehicula sapien porttitor. Nunc tincidunt purus eget elit ornare, sit amet feugiat neque tempus.
        Maecenas ultricies interdum orci vitae tincidunt. Sed imperdiet, elit at facilisis finibus, leo dui pellentesque dolor, a faucibus lectus neque eget eros. Aenean et leo id nunc tincidunt ultricies at eget nisi.
        Pellentesque mollis, neque eu faucibus luctus, sem ligula lacinia libero, id sodales dui justo non sapien. Nam interdum aliquam dolor, at maximus massa venenatis non. Sed vehicula venenatis hendrerit.
        Morbi nec nisi sed erat suscipit iaculis. Quisque et gravida erat. Pellentesque finibus iaculis dolor et porttitor. Nam ut sapien eu urna lacinia auctor eget quis elit.</ExpandableText>
    </div>
  );
}

export default App;