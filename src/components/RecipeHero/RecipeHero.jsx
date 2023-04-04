import BtnJs from "reusableComponents/BtnJs/BtnJs";

const RecipeHero = ({title, description, onBtnClick, time}) => {
    return (
        <section>
        {/* Recipe name from API */}
        <h1>{title}</h1>
        {/* recipe describe from API */}
        <p>{description}</p>
        <BtnJs
          name={'Add to favorites'}
          onClick={onBtnClick}
          variant={'normal'}
        />
        <div>
          <svg>
            <use href="../images/icons/placeholders.svg#ph-apple-57px"></use>
          </svg>
          {/* Time data from API
              timeData? <p>timeData</p> */}
          <p>{`${time} min`}</p>
        </div>
      </section>
    )
}

export default RecipeHero;