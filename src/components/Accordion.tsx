import { useState } from 'react';
import { Faqs } from '../@types/faqs.type';
import AccordionItem from './AccordionItem';

interface IProps {
  data: Faqs[];
}
function Accordion({ data }: IProps) {
  const [curOpen, setCurOpen] = useState<null | number>(null);

  return (
    <div className='accordion'>
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
      {
        // Test Component For Children Prop
      }
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title='Test 1'
        num={22}
        key='test 1'
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusuable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

export default Accordion;
