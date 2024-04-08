import { useState } from 'react'
import './App.css'
import ales from "./images/ales-nesetril-unsplash.jpg";
import cdx from "./images/c-d-x-unsplash.jpg";
import domenico from "./images/domenico-loia-unsplash.jpg";
import gilles from "./images/gilles-lambert-unsplash.jpg";
import kelly from "./images/j-kelly-brito-unsplash.jpg";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <h1>TekNews</h1>
      <nav>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Our Process</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
    <section class="splash">
      <h2>Your place for tech news!</h2>
    </section>
    <main>
      <article>
        <img src={cdx} />
        <h3>The best headphones of this year</h3>
        <p>
          Although earbuds are all the rage these days, true audiophiles know
          that nothing can beat a nice pair of headphones. TekNews has reviewed
          all of the latest headphones and we're here to give you our thoughts.
          What we've found may surprise you!
        </p>
        <aside>
          <a href="#">Go to article...</a>
        </aside>
      </article>
      <article>
        <img src={domenico} />
        <h3>The perfect work-from-home setup</h3>
        <p>
          Is your work-from-home setup making you feel blue? If working from
          home is new for you, it's easy to become overwhelmed by decision
          fatigue. In this article, we make it simple and tell you what you
          absolutely <em>need</em> as opposed to what's nice to have.
        </p>
        <aside>
          <a href="#">Go to article...</a>
        </aside>
      </article>
      <article>
        <img src={gilles} />
        <h3>What exactly is the dark web?</h3>
        <p>
          It seems like everyone has an opinion on the "dark web" these days.
          Just how scary is the dark web? Well, you might be surprised to learn
          that the dark web isn't all it's cracked up to be. In fact, on average
          it's much more boring than you may expect...
        </p>
        <aside>
          <a href="#">Go to article...</a>
        </aside>
      </article>
      <article>
        <img src={kelly} />
        <h3>Learning to code</h3>
        <p>
          If you're just getting started on your coding journey, you may be
          overwhelmed by the amount of resources out there. Our team of
          educational experts picks some of the best educational websites in
          this article so you can learn to code quick!
        </p>
        <aside>
          <a href="#">Go to article...</a>
        </aside>
      </article>
    </main>
    <footer>
      <section>
        <h4>About</h4>
        <ul>
          <li>
            <a href="#">Who We Are</a>
          </li>
          <li>
            <a href="#">Current Staff</a>
          </li>
          <li>
            <a href="#">Advisory Board</a>
          </li>
        </ul>
      </section>
      <section>
        <h4>Get Involved</h4>
        <ul>
          <li>
            <a href="#">Got a tip?</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </section>
    </footer>
  </>
  );
}

export default App
