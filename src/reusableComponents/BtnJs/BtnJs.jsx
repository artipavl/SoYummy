const { BtnJsStyled } = require("./BtnJs.styled")

const BtnJs = ({name, onClick, variant}) => {
    return (
        <BtnJsStyled onClick={onClick} variant={variant}>{name}</BtnJsStyled>
    )
}

export default BtnJs;