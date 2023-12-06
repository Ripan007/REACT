import { useState } from 'react';
import EXAMPLES from '../datas';
import TabButton from './TabButton';
import Section from './Section';
import Tabs from './Tabs';

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  let tabContent = <p>please select a button</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="examples-content">
        <h1>{EXAMPLES[selectedTopic].title}</h1>
        <p>{EXAMPLES[selectedTopic].description}</p>
      </div>
    );
  }
  return (
    <>
      <Section title="examples" id="examples" className="example">
        <Tabs
          buttonsContainer={'ul'}
          buttons={
            <>
              {' '}
              <TabButton
                isSelected={selectedTopic === 'components'}
                onClick={() => handleSelect('components')}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTopic === 'jsx'}
                onClick={() => handleSelect('jsx')}
              >
                Jsx
              </TabButton>
              <TabButton
                isSelected={selectedTopic === 'props'}
                onClick={() => handleSelect('props')}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === 'state'}
                onClick={() => handleSelect('state')}
              >
                State
              </TabButton>
            </>
          }
        >
          {tabContent}
        </Tabs>
      </Section>
    </>
  );
}

export default Examples;
