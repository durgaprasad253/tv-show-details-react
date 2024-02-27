import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
export function SearchBar({ onSubmit }) {
  function onKeyUp(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      e.target.value = "";
    }
  }
  return (
    <div className={s.container}>
      <SearchIcon size={27} className={s.icon}></SearchIcon>
      <input
        onKeyUp={onKeyUp}
        className={s.searchbar}
        type="text"
        placeholder={"Search for a tv show that you may like"}
      ></input>
    </div>
  );
}
