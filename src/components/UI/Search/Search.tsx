import s from "./Search.module.css"
import search from "../../../assets/icons/search.svg"
interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
  variant?:string
}


export default function Search({value,onChange}:Props) {
  return (
    <label className={s.search}>
        <img src={search} alt="" />
        <input type="text" value={value} onChange={onChange} placeholder="Search" />
    </label>
  )
}
