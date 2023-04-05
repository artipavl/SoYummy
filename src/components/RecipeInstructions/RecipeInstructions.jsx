import { nanoid } from '@reduxjs/toolkit';

const RecipeInstructions = ({ instructions, picture, alt }) => {
    return (      <section>
        <h2>Recipe preparation</h2>
        {/* Preparation list from API */}
        <ol>
          {instructions.map(instruction => {
            return (
              <li key={nanoid()}>
                <p>{instruction}</p>
              </li>
            );
          })}
        </ol>
        {picture ? (
          <img src={picture} alt={alt}></img>
        ) : (
          <img
            src={'../images/placeholders.svg#ph-img-300px'}
            alt={alt}
          ></img>
        )}
      </section>)
}

export default RecipeInstructions;