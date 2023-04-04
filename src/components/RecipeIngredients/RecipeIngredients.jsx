const RecipeIngredients = () => {
    return (
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
            <input type="checkbox" />{' '}
          </li>
          <li>
            <img src="" alt="" />
            <p>Avocado</p>
            <input type="checkbox" />
          </li>
          <li>
            <img src="" alt="" />
            <p>Cucumber</p>
            <input type="checkbox" />
          </li>
          <li>
            <img src="" alt="" />
            <p>Spinach</p>
            <input type="checkbox" />
          </li>
        </ul>
      </section>
    )
}

export default RecipeIngredients;