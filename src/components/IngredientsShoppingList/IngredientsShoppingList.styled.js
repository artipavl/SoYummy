import styled from 'styled-components';

export const ShoppingListContainer = styled.div`
  padding: 50px 0 100px;
  /* Тичасовий фон */
  background: ${props => props.theme.colors.bgDark};
  background: ${props => props.theme.colors.textWhite};

  @media ${props => props.theme.device.tablet} {
    padding: 72px 0 200px;
  }
  /* @media ${props => props.theme.device.desktop} {
    
  } */
`;

export const ShoppingListTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  border-radius: 8px;
  padding: 10px;
  background: ${props => props.theme.colors.accent};

  @media ${props => props.theme.device.tablet} {
    padding: 20px;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const ShoppingList = styled.ul``;

export const TitleName = styled.span`
  color: ${props => props.theme.colors.textWhite};
`;

export const RightBox = styled.div`
  display: flex;
  column-gap: 24px;
  @media ${props => props.theme.device.tablet} {
    column-gap: 78px;
  }
  @media ${props => props.theme.device.desktop} {
    column-gap: 142px;
  }
`;

export const ShoppingListItem = styled.li`
  display: flex;
  padding: 24px 8px;
  border-bottom: 1px solid #fafafa4d;
  border-bottom: 1px solid #e0e0e0;

  justify-content: space-between;
`;

export const ItemBoxLeft = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: flex-start;
`;

export const ItemBoxRight = styled(ItemBoxLeft)`
  column-gap: 46px;
`;

export const ImageProduct = styled.img`
  width: 48px;
  height: 48px;
  padding: 6px;
  border-radius: 8px;
  background: ${props => props.theme.colors.accentDarkMuted};
  background: ${props => props.theme.colors.accentMuted};
`;

export const TitleProduct = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: ${props => props.theme.colors.textWhite};
  color: ${props => props.theme.colors.textDark};
`;

export const DeleteBtn = styled.button`
  height: 14px;
  width: 14px;
  margin-right: 18px;
`;

export const MeasureProduct = styled.p`
  background: ${props => props.theme.colors.accent};
  border-radius: 4px;
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;
  text-align: center;
  color: ${props => props.theme.colors.textWhite};
  padding: 4px;
  max-width: 70px;
  min-width: 37px;
`;
