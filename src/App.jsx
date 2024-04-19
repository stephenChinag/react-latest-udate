import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";
import SearchableList from "./components/SearchableList/SearchableList";
import { PLACES } from "./Place";
import Place from "./Place";

function App() {
  return (
    <main>
      <section>
        <h2> Why work with us</h2>
        <Accordion className="accordion">
          <Accordion.Item id="experience" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We're working with local guides
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p> You cant&apos;'t go wrong with us</p>
                <p>
                  We are in the business planning highly individualized vaction
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="local-guides" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We're working with local guides
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p> You cant&apos;'t go wrong with us</p>
                <p>
                  We are in the business planning highly individualized vaction
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={["item 1", "Item 2"]} itemKeyFn={(item) => item}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
