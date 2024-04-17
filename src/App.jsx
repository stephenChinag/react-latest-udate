import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2> Why work with us</h2>
        <Accordion className="accordion">
          <Accordion.Item
            id="experience "
            className="accordion-item"
            title="We're working with local guides"
          >
            <article>
              <p> You cant&apos;'t go wrong with us</p>
              <p>
                We are in the business planning highly individualized vaction
              </p>
            </article>
          </Accordion.Item>
          <Accordion.Item
            id="local-guides"
            className="accordion-item"
            title="We're working with local guides"
          >
            <article>
              <p> You cant&apos;'t go wrong with us</p>
              <p>
                We are in the business planning highly individualized vaction
              </p>
            </article>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
