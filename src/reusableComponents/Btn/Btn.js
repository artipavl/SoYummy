import { Btn } from './btn.style';

export const RoundedButton = ({ title, to, variant = 'normal' }) => {
  return (
    <>
      <Btn variant={variant} to={to}>
        {title}
      </Btn>
    </>
  );
};

/*
Перевикористання компоненту.
Вибираємо компонент додаємо Пропси які потрібно

пропс variant - змінює стилі фону кнопки. 
  normal - За замовчуванням стандартне оформлення. 
  dark - темне оформлення сторінки. 
  transparent - прозора кнопка.

Пропс to - маршут.

Пропс title - текст в кнопці.

приклад використання = <RoundedButton variant={"dark"} to={"/signin"} title={"Search"}} />
*/
