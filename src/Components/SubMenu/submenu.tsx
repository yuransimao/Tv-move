import Styles from "./Styles.module.scss"
import {RxCross2} from"react-icons/rx"

interface SubMenuprops{
    children?:any
    setvisivel?: () => void
}
export function SubMenu(props : SubMenuprops){
    return(
        <div className={Styles['Submenu']}>
            <button onClick={props.setvisivel}><RxCross2/></button>
           <div className={Styles['menu']}>
        
           </div>
        </div>
    )
}