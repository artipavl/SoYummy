import Switch from "react-switch";

export const ThemeToogle = ({handleChange, checked}) => {

  return (
    <Switch
         checked={checked}
            onChange={handleChange}
            onColor="#8BAA36"
            offColor = '#EFEFEF'
            handleDiameter={22}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1)"
            activeBoxShadow="inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1)"
            height={27}
            width={61}
            id="material-switch"

          />



  )
}
