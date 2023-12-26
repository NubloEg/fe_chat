import s from "./Search.module.css"
import search from "../../../assets/icons/search.svg"
export default function Search() {
  return (
    <label className={s.search}>
        <img src={search} alt="" />
        <input type="text" placeholder="Search" />
    </label>
  )
}
