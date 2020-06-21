import * as React from 'react';
import './MenuToggle.css'
import 'font-awesome/css/font-awesome.min.css'

export interface MenuToggleProps {
  isOpen: boolean,
  onToggle: () => void
}
 
const MenuToggle: React.SFC<MenuToggleProps> = (props) => {

  const cls = [
    'menu-toggle',
    'fa'
  ]

  if(props.isOpen) {
    cls.push('fa-times')
    cls.push('open')
  } else {
    cls.push('fa-bars')
  }
  return ( 
    <i
      className={cls.join(' ')}
      onClick={props.onToggle}
    />
   );
}
 
export default MenuToggle;