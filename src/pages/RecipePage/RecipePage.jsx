import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Btn } from 'reusableComponents/Btn/btn.style';

const RecipePage = () => {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState('');

  const getRecipeById = async recipeId => {
    return await axios.get(`https://so-yummy-api.onrender.com/api/recipes/${recipeId}`);
  };
  useEffect(() => {
    getRecipeById(id)
      .then(response => {
        setRecipeDetails(response.data)
      console.log(response)})
      .catch(error => console.error(error));
  }, [id]);
  return (
    <div>
      <section>
        {/* Recipe name from API */}
        <h1>Salmon Avocado Salad</h1>
        {/* recipe describe from API */}
        <p>
          Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
          pan seared salmon is layered on top of spinach, avocado, tomatoes, and
          red onions. Then drizzled with a homemade lemon vinaigrette.
        </p>
              <Btn title={`Add to favorite recipes`} variant={`transparent`} />
              <div><svg><use href='../../images/recipePage/recipePage-icons#clock-mb'></use></svg>
              {/* Time data from API
              timeData? <p>timeData</p> */}
                  <p>20 min</p>
              </div>
      </section>
          <section>
              <div>
                  <p>Ingredients</p>
                  <p>Number</p>
                  <p>Add to list</p>
              </div>
              {/* Ingredients list from API */}
              <ul>
          <li>
            {/* ImageFromAPi ? <ImageFromApi/> : <Placeholder/> */}
            <img src="" alt="" />
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
        {/* Preparation list from API */}
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
              <img src='../../images/icons/placeholders'></img>
          </section>
    </div>
  );
};

export default RecipePage;
