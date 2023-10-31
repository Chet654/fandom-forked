import { useState, useEffect } from "react";
import classes from "../Style/Components/main.module.scss";
import UIButton from "./UIButton";
import { data } from "./data";
import { BsArrowRight } from "react-icons/bs";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const [cardList, setCardList] = useState(data);
  const [searchItem, setSearchItem] = useState("");

  const filter = (searchText: string, data: any[]) => {
    if (!searchText) {
      return data;
    }
    return data.filter(({ name }) =>
      name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filtered = filter(searchItem, data);
      setCardList(filtered);
    }, 300);
    return () => clearTimeout(Debounce);
  }, [searchItem]);

  return (
    <div className={classes["Main"]}>
      <header className={classes["Main__Header"]}>
        <div className={classes["Main__Header-top"]}>
          <svg
            className={classes["Main__Header-top__icons"]}
            xmlns="http://www.w3.org/2000/svg"
            id="wds-brand-fandom-logomark"
            viewBox="0 0 174 242"
          >
            <path
              fill="#FA005A"
              d="M166.935 118.154L50.108 1.273C49.504.67 48.735.259 47.898.093c-.837-.166-1.705-.08-2.493.247-.788.327-1.461.88-1.935 1.59-.474.71-.727 1.546-.727 2.4v98.276L7.365 67.22c-.604-.604-1.373-1.014-2.21-1.18-.837-.166-1.704-.08-2.492.247-.789.327-1.462.88-1.936 1.59-.474.71-.727 1.545-.727 2.4v101.487c-.003 3.172.62 6.312 1.833 9.242 1.214 2.929 2.993 5.59 5.237 7.83l46.037 46.099c4.528 4.53 10.666 7.078 17.068 7.085h33.68c6.4-.003 12.537-2.547 17.063-7.075l46.027-46.099c2.239-2.242 4.014-4.904 5.225-7.833 1.21-2.93 1.832-6.069 1.83-9.239v-36.533c.002-3.173-.621-6.315-1.834-9.247-1.212-2.932-2.989-5.596-5.231-7.84z"
            ></path>
            <path
              fill="#FFC500"
              d="M131.297 160.901c.001 1.915-.757 3.754-2.108 5.111l-37.11 37.3c-.672.677-1.472 1.215-2.354 1.582-.88.366-1.826.555-2.78.555-.954 0-1.9-.189-2.78-.555-.882-.367-1.682-.905-2.355-1.582l-36.99-37.3c-1.352-1.351-2.114-3.184-2.117-5.096v-14.191c0-.951.19-1.892.554-2.77.366-.878.9-1.675 1.574-2.346l13.317-13.328c.672-.675 1.47-1.209 2.35-1.574.879-.365 1.82-.553 2.772-.553.952 0 1.894.188 2.773.553.879.365 1.677.899 2.35 1.574l18.624 18.645 18.596-18.65c.672-.675 1.47-1.209 2.349-1.574.879-.365 1.821-.553 2.773-.553.951 0 1.893.188 2.772.553.879.365 1.677.899 2.349 1.574l13.318 13.328c.673.671 1.207 1.469 1.571 2.347.364.877.552 1.819.552 2.769v14.181z"
            ></path>
          </svg>
          <div className={classes["Main__Header-top__text"]}>FANDOM</div>
          <svg
            className={classes["Main__Header-top__icons"]}
            viewBox="0 0 12 12"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 7.947C7.991 7.955 7.981 7.964 7.973 7.973C7.963 7.982 7.955 7.991 7.946 8.001C7.315 8.619 6.451 9 5.5 9C3.57 9 2 7.43 2 5.5C2 3.571 3.57 2 5.5 2C7.429 2 9 3.571 9 5.5C9 6.451 8.618 7.316 8 7.947ZM11.707 10.293L10.03 8.616C10.641 7.73 11 6.656 11 5.5C11 2.468 8.532 0 5.5 0C2.467 0 0 2.468 0 5.5C0 8.533 2.467 11 5.5 11C6.655 11 7.729 10.642 8.615 10.03L10.292 11.707C10.488 11.903 10.744 12 11 12C11.255 12 11.511 11.903 11.707 11.707C12.097 11.317 12.097 10.684 11.707 10.293Z"
              fill="currentColor"
            ></path>
          </svg>

          <div className={classes["Main__Header-top--a"]}>
            <div className={classes["Main__Header-top--a-svgcontainer"]}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 15V11"
                  stroke="#FA005A"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5 13H9"
                  stroke="#FA005A"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M17 15C18.1046 15 19 14.1046 19 13C19 11.8954 18.1046 11 17 11C15.8954 11 15 11.8954 15 13C15 14.1046 15.8954 15 17 15Z"
                  stroke="#FA005A"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 6V2"
                  stroke="#FA005A"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M23 8V15.17C23 15.7 22.79 16.21 22.41 16.58L19.58 19.41C19.21 19.79 18.7 20 18.17 20H5.83C5.3 20 4.79 19.79 4.42 19.41L1.59 16.58C1.21 16.21 1 15.7 1 15.17V8C1 6.9 1.9 6 3 6H21C22.1 6 23 6.9 23 8Z"
                  stroke="#FA005A"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className={classes["Main__Header-top--a-svgtext"]}>
              видеоигры
            </div>
          </div>
          <div className={classes["Main__Header-top--a"]}>
            <div className={classes["Main__Header-top--a-svgcontainer"]}>
              <svg
                className="nav-icon wds-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#FA005A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="m5.41 19.41-2.83-2.83c-.37-.37-.58-.88-.58-1.41V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v9.17c0 .53-.21 1.04-.59 1.41l-2.83 2.83c-.37.38-.88.59-1.41.59H6.83c-.53 0-1.04-.21-1.42-.59z"
                ></path>
                <path
                  stroke="#FA005A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M6.09 10.09 7.3 8.88a.996.996 0 0 1 1.41 0l1.21 1.21M14.09 10.09l1.21-1.21a.996.996 0 0 1 1.41 0l1.21 1.21M15 15H9"
                ></path>
              </svg>
            </div>
            <div className={classes["Main__Header-top--a-svgtext"]}>аниме</div>
          </div>
          <div className={classes["Main__Header-top--a"]}>
            <div className={classes["Main__Header-top--a-svgcontainer"]}>
              <svg
                className="nav-icon wds-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20Z"
                  stroke="#FA005A"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2 9H22"
                  stroke="#FA005A"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M11 9L6 4"
                  stroke="#FA005A"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M18 9L13 4"
                  stroke="#FA005A"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className={classes["Main__Header-top--a-svgtext"]}>кино</div>
          </div>
          <div className={classes["Main__Header-top--a"]}>
            <div className={classes["Main__Header-top--a-svgcontainer"]}>
              <svg
                className="nav-icon wds-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H4C2.9 6 2 6.9 2 8V18C2 19.1 2.9 20 4 20Z"
                  stroke="#FA005A"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 6L16 2"
                  stroke="#FA005A"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 6L8 2"
                  stroke="#FA005A"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M17 11H18"
                  stroke="#FA005A"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M17 15H18"
                  stroke="#FA005A"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className={classes["Main__Header-top--a-svgtext"]}>тв</div>
          </div>
          <div className={classes["Main__Header-top--a"]}>
            <div className={classes["Main__Header-top--a-svgcontainer"]}>
              <svg
                className="nav-icon wds-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 12L10 8.54001V15.46L16 12Z"
                  stroke="#FA005A"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20Z"
                  stroke="#FA005A"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className={classes["Main__Header-top--a-svgtext"]}>видео</div>
          </div>
          <div className={classes["Main__Header-top--a"]}>
            <div className={classes["Main__Header-top--a-svgcontainer"]}>
              <svg
                className="nav-icon wds-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 7L14.41 4.59C14.79 4.21 15.3 4 15.83 4H21C22.1 4 23 4.9 23 6V16C23 17.1 22.1 18 21 18H15.83C15.3 18 14.79 18.21 14.42 18.59L12 21L9.59 18.59C9.21 18.21 8.7 18 8.17 18H3C1.9 18 1 17.1 1 16V6C1 4.9 1.9 4 3 4H8.17C8.7 4 9.21 4.21 9.59 4.59L12 7Z"
                  stroke="#FA005A"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 20V7"
                  stroke="#FA005A"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M16 9H19"
                  stroke="#FA005A"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M16 13H19"
                  stroke="#FA005A"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5 9H8"
                  stroke="#FA005A"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className={classes["Main__Header-top--a-svgtext"]}>вики</div>
          </div>
          <div className={classes["Main__Header-top--a"]}>
            <div className={classes["Main__Header-top--a-svgcontainer"]}>
              <svg
                className="nav-icon wds-icon"
                viewBox="0 0 18 18"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 8H10V2C10 1.447 9.552 1 9 1C8.448 1 8 1.447 8 2V8H2C1.448 8 1 8.447 1 9C1 9.553 1.448 10 2 10H8V16C8 16.553 8.448 17 9 17C9.552 17 10 16.553 10 16V10H16C16.552 10 17 9.553 17 9C17 8.447 16.552 8 16 8Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className={classes["Main__Header-top--a-svgtext"]}>
              start a wiki
            </div>
          </div>
        </div>
      </header>
      <div className={classes["Main__Logo"]}>
        <img src="/images/logo.webp" />
      </div>
      <UIButton onClick={() => navigate("/reg")} type="string">
        Войти
      </UIButton>
      <UIButton onClick={() => navigate("/reg")} type="number">
        <svg
          width="10px"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.9998 10.9999C11.0348 10.9999 10.2498 10.2149 10.2498 9.24988C10.2498 8.28488 11.0348 7.49988 11.9998 7.49988C12.9648 7.49988 13.7498 8.28488 13.7498 9.24988C13.7498 10.2149 12.9648 10.9999 11.9998 10.9999ZM11.9998 5.49988C9.93179 5.49988 8.24979 7.18188 8.24979 9.24988C8.24979 11.3179 9.93179 12.9999 11.9998 12.9999C14.0678 12.9999 15.7498 11.3179 15.7498 9.24988C15.7498 7.18188 14.0678 5.49988 11.9998 5.49988ZM19.679 18.414C17.692 16.31 14.952 15.125 12 15.125C9.04705 15.125 6.30805 16.31 4.32105 18.414C2.81705 16.61 2.00005 14.369 2.00005 12C2.00005 6.486 6.48605 2 12 2C17.514 2 22 6.486 22 12C22 14.371 21.181 16.613 19.679 18.414ZM12 22C9.71402 22 7.52702 21.229 5.75002 19.813C7.36302 18.094 9.59402 17.125 12 17.125C14.406 17.125 16.637 18.094 18.249 19.813C16.472 21.229 14.286 22 12 22ZM12 0C5.383 0 0 5.383 0 12C0 15.268 1.294 18.33 3.651 20.63C3.655 20.634 3.659 20.639 3.663 20.643C5.923 22.808 8.883 24 12 24H12.036C15.139 23.99 18.086 22.799 20.337 20.643C20.338 20.641 20.34 20.639 20.342 20.637C22.701 18.341 24 15.273 24 12C24 5.383 18.617 0 12 0Z"
            fill="currentColor"
          ></path>
        </svg>
        <span>Регистрация</span>
      </UIButton>

      <div className={classes["Main__Search"]}>
        <label className={classes["Main__Search-label"]}>
          <input
            id="search"
            className={classes["Main__Search-label__input"]}
            placeholder="Search the world's largest fan wiki platform"
            name="s"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </label>
        <button className={classes["Main__Search__button"]} type="submit">
          <svg
            className="search-box__search-icon-submit"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 7.947C7.991 7.955 7.981 7.964 7.973 7.973C7.963 7.982 7.955 7.991 7.946 8.001C7.315 8.619 6.451 9 5.5 9C3.57 9 2 7.43 2 5.5C2 3.571 3.57 2 5.5 2C7.429 2 9 3.571 9 5.5C9 6.451 8.618 7.316 8 7.947ZM11.707 10.293L10.03 8.616C10.641 7.73 11 6.656 11 5.5C11 2.468 8.532 0 5.5 0C2.467 0 0 2.468 0 5.5C0 8.533 2.467 11 5.5 11C6.655 11 7.729 10.642 8.615 10.03L10.292 11.707C10.488 11.903 10.744 12 11 12C11.255 12 11.511 11.903 11.707 11.707C12.097 11.317 12.097 10.684 11.707 10.293Z"
              fill="#520044"
            ></path>
          </svg>
        </button>
      </div>
      <div className={classes["Main__Catalog"]}>
        {cardList.map((i) => (
          <div className={classes["Main__Catalog__card"]}>
            <img className={classes["Main__Catalog__card-img"]} src={i.img} />
            <p className={classes["Main__Catalog__card-naming"]}>{i.name}</p>
            <h4 className={classes["Main__Catalog__card-description"]}>
              {i.description}
            </h4>
          </div>
        ))}
      </div>
      <div className={classes["Main__Footer"]}>
        <div className={classes["Main__Footer-blocks"]}>
          <div className={classes["Main__Footer-blocks__wiki"]}>
            <svg
              width="20"
              className="Main__Footer-blocks__icons"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 7L14.41 4.59C14.79 4.21 15.3 4 15.83 4H21C22.1 4 23 4.9 23 6V16C23 17.1 22.1 18 21 18H15.83C15.3 18 14.79 18.21 14.42 18.59L12 21L9.59 18.59C9.21 18.21 8.7 18 8.17 18H3C1.9 18 1 17.1 1 16V6C1 4.9 1.9 4 3 4H8.17C8.7 4 9.21 4.21 9.59 4.59L12 7Z"
                stroke="#FA005A"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12 20V7"
                stroke="#FA005A"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M16 9H19"
                stroke="#FA005A"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M16 13H19"
                stroke="#FA005A"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M5 9H8"
                stroke="#FA005A"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <div className={classes["Main__Footer-blocks__best"]}>
              {" "}
              Лучшие вики
            </div>
          </div>

          <div className={classes["Main__Footer-blocks__game"]}>
            <div className={classes["Main__Footer-blocks__items"]}>GAMES</div>
            <div className={classes["Main__Footer-blocks__item"]}>
              {" "}
              Terraria
            </div>
            <div className={classes["Main__Footer-blocks__item"]}>
              Minecraft
            </div>
            <div className={classes["Main__Footer-blocks__item"]}>
              {" "}
              Genshin Impact
            </div>
          </div>

          <div className={classes["Main__Footer-blocks__divided"]}></div>

          <div className={classes["Main__Footer-blocks__movies"]}>
            <div className={classes["Main__Footer-blocks__items"]}>MOVIES</div>
            <div className={classes["Main__Footer-blocks__item"]}>
              {" "}
              Star Wars
            </div>
            <div className={classes["Main__Footer-blocks__item"]}>
              Harry Potter
            </div>
            <div className={classes["Main__Footer-blocks__item"]}> Marvel</div>
          </div>
          <div className={classes["Main__Footer-blocks__divided"]}></div>

          <div className={classes["Main__Footer-blocks__tv"]}>
            <div className={classes["Main__Footer-blocks__items"]}> TV</div>
            <div className={classes["Main__Footer-blocks__item"]}>
              Memory Alpha
            </div>
            <div className={classes["Main__Footer-blocks__item"]}>
              Arrowverse
            </div>
            <div className={classes["Main__Footer-blocks__item"]}>
              SpongeBobia
            </div>
          </div>
          <div className={classes["Main__Footer-blocks__divided"]}></div>

          <div className={classes["Main__Footer-blocks__anime"]}>
            <div className={classes["Main__Footer-blocks__items"]}>ANIME</div>
            <div className={classes["Main__Footer-blocks__item"]}>
              One Piece
            </div>
            <div className={classes["Main__Footer-blocks__item"]}>Naruto</div>
            <div className={classes["Main__Footer-blocks__item"]}>
              My Hero Aacademia
            </div>
          </div>

          <div className={classes["Main__Footer-blocks__divided"]}></div>

          <div className={classes["Main__Footer-blocks__more"]}>
            <div className={classes["Main__Footer-blocks__item"]}>
              И еще более 250 000 для вас
            </div>
            <a href="https://www.fandom.com/explore">
              <div className={classes["Main__Footer-blocks__arrow"]}>
                <BsArrowRight />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
