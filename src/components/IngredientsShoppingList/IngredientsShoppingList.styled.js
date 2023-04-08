import styled from 'styled-components';

export const ShoppingListContainer = styled.div`
  padding: 50px 0 100px;

  /* Тичасовий фон */
  background: ${props => props.theme.colors.textWhite};
  background: ${props => props.theme.colors.bgDark};

  @media ${props => props.theme.device.tablet} {
    padding: 72px 0 200px;
  }

  @media ${props => props.theme.device.desktop} {
    padding-bottom: 195px;
  }
`;

export const ShoppingListTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 8px;
  padding: 10px;
  background: ${props => props.theme.colors.accent};

  @media ${props => props.theme.device.tablet} {
    padding: 20px;
    font-size: 18px;
    letter-spacing: 0.03em;
  }
  @media ${props => props.theme.device.desktop} {
    padding: 21px 40px;
  }
`;

export const ShoppingList = styled.ul`
  padding-top: 8px;
  @media ${props => props.theme.device.tablet} {
    padding-top: 5px;
  }
`;

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
  padding: 24px 24px 24px 8px;
  border-bottom: 1px solid #fafafa4d;
  border-bottom: 1px solid #e0e0e0;
  justify-content: space-between;
  @media ${props => props.theme.device.tablet} {
    padding: 45px 45px 42px 0px;
  }
  @media ${props => props.theme.device.desktop} {
    padding: 45px 68px 42px 40px;
  }
`;

export const ItemBoxLeft = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: flex-start;
  @media ${props => props.theme.device.tablet} {
    column-gap: 16px;
  }
`;

export const ItemBoxRight = styled(ItemBoxLeft)`
  column-gap: 46px;
  @media ${props => props.theme.device.tablet} {
    column-gap: 110px;
  }
  @media ${props => props.theme.device.desktop} {
    column-gap: 174px;
  }
`;

export const ImageProduct = styled.img`
  width: 48px;
  height: 48px;
  padding: 6px;
  border-radius: 8px;
  background: ${props => props.theme.colors.accentMuted};
  background: ${props => props.theme.colors.accentDarkMuted};

  @media ${props => props.theme.device.tablet} {
    width: 93px;
    height: 97px;
    padding: 8px 6px;
  }
`;

export const TitleProduct = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  color: ${props => props.theme.colors.textDark};
  color: ${props => props.theme.colors.textWhite};
  @media ${props => props.theme.device.tablet} {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const DeleteBtn = styled.button`
  height: 14px;
  width: 14px;
  @media ${props => props.theme.device.tablet} {
    height: 20px;
    width: 20px;
  }
`;

export const MeasureProduct = styled.p`
  background: ${props => props.theme.colors.accent};
  border-radius: 4px;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  text-align: center;
  color: ${props => props.theme.colors.textWhite};
  padding: 4px;
  max-width: 70px;
  min-width: 37px;

  @media ${props => props.theme.device.tablet} {
    max-width: 140px;
    min-width: 68px;
    font-size: 18px;
  }
`;
