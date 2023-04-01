import { Btn } from 'reusableComponents/Btn/btn.style';

const RecipePage = () => {
  return (
    <div>
      <section>
        <h1>Salmon Avocado Salad</h1>
        <p>
          Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
          pan seared salmon is layered on top of spinach, avocado, tomatoes, and
          red onions. Then drizzled with a homemade lemon vinaigrette.
        </p>
              <Btn title={`Add to favorite recipes`} variant={`transparent`} />
              <div><svg>Time</svg>
                  <p>20 min</p>
              </div>
      </section>
          <section>
              <div>
                  <p>Ingredients</p>
                  <p>Number</p>
                  <p>Add to list</p>
              </div>
              <ul>
                  <li><img src="" alt="" />
                  <p>Salmon</p>
                  <input type="checkbox" /> </li>
                  <li><img src="" alt="" />
                  <p>Avocado</p>
                  <input type="checkbox" /></li>
                  <li><img src="" alt="" />
                  <p>Cucumber</p>
                  <input type="checkbox" /></li>
                  <li><img src="" alt="" />
                  <p>Spinach</p>
                  <input type="checkbox" /></li>
              </ul>
          </section>
          <section>
              <h2>Recipe preparation</h2>
              <ol>
                  <li>
                    <p>1</p>
                  </li>
                  <li>
                    <p>2</p>
                  </li>
                  <li>
                    <p>3</p>
                  </li>
                  <li>
                    <p>4</p>
                  </li>
                  <li>
                    <p>5</p>
                  </li>
                  <li>
                    <p>6</p>
                  </li>
              </ol>
              <img></img>
          </section>
    </div>
  );
};

export default RecipePage;
