import { useLocation } from 'react-router-dom';
import { RiDeleteBinLine } from 'react-icons/ri';

import { RoundedButton } from 'reusableComponents/Btn/Btn';

// import css from './MyRecipeItem.module.css';
import {
  CardItem,
  ImgBox,
  Image,
  Info,
  Title,
  Description,
  Time,
} from './MyRecipeItem.styled';

const MyRecipeItem = ({
  description,
  preview,
  time,
  title,
  id,
  handelDelete,
  ButtonDelete,
  ButtonRecipe,
  style,
}) => {
  const location = useLocation();

  return (
    <CardItem>
      <ImgBox imgUrl="../../images/Plug1.png">
        <Image src={preview} alt={title} />
      </ImgBox>
      <Info>
        <Title>{title}</Title>
        <button
          className={`${ButtonDelete}`}
          type="button"
          onClick={handelDelete}
        >
          <RiDeleteBinLine />
        </button>
        <Description>{description}</Description>
        <Time>{time} min</Time>
        <div className={`${ButtonRecipe}`}>
          <RoundedButton
            title="See recipe"
            to={`/recipe/${id}`}
            variant={style}
            statefrom={{ from: location }}
          />
        </div>
      </Info>
    </CardItem>
  );
};

export default MyRecipeItem;
