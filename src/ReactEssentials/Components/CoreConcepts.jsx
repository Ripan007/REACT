import CoreConcept from './CoreConcept';
import CORE_CONCEPTS from './data';

function CoreConcepts() {
  return (
    <>
      {CORE_CONCEPTS.map(conceptItem => (
        <CoreConcept key={conceptItem.title} {...conceptItem} />
      ))}
    </>
  );
}

export default CoreConcepts;
