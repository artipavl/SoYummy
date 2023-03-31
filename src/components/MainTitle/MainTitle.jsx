import css from './MainTitle.module.css';

const MainTitle = ({ text }) => {
  return (
    <h2 className={css.mainTitle}>{text}</h2>
  )
};

export default MainTitle;
