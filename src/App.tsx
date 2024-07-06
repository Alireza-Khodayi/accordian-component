import Accordion from './components/Accordion';
import { faqs } from './data/faqs';
function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

export default App;
