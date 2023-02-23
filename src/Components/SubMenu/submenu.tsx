import Styles from "./Styles.module.scss"
import {RxCross2} from"react-icons/rx"

export function SubMenu(){
    return(
        <div className={Styles['Submenu']}>
            <button><RxCross2/></button>
           <div className={Styles['menu']}>
        
           </div>
        </div>
    )
}