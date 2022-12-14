import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

import t from "./SearchCard.module.css";
import { AiFillExclamationCircle } from "react-icons/ai";

const SearchCard = () => {
  return (
    <div className={t["search-app"]}>
      <div className={t["container"]}>
        <Card sx={{}} style={{ borderRadius: 0 }}>
          <div
            className="search_grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 5fr",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 20px",
              boxSizing: "border-box",
            }}
          >
            <div className="search-left">
              <h2>
                <AiFillExclamationCircle />
              </h2>
            </div>
            <div
              className="search-right"
              style={{ borderBottom: "1px solid black" }}
            >
              {" "}
              <h3>Search for partner companies</h3>
            </div>
          </div>
          <Card sx={{}} style={{ borderRadius: 0, marginTop: 10 }}>
            <div style={{ padding: "0 20px", lineHeight: "30px" }}>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
            <div className={t["searchCarchInputs"]}>
              <div className={t["searchCardFirsBlock"]}>
                <div>
                  <label htmlFor="">Tipo cursor</label> <br />
                  <select name="" id="">
                    <option value="">Master’s degree - 2</option>
                    <option value="">Master’s degree - 3</option>
                    <option value="">Master’s degree - 4</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="">Cursor</label> <br />
                  <input type="text" />
                </div>
              </div>

              <p style={{ padding: "0 30px" }}>Internship duty station</p>

              <div className={t["searchCardSecondBlock"]}>
                <div>
                  <input type="radio" />
                  <label htmlFor="">Italy</label>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {/* <p>province</p> */}
                  <select name="" id="">
                    <option value="">Master’s degree - 2</option>
                    <option value="">Master’s degree - 3</option>
                    <option value="">Master’s degree - 4</option>
                  </select>
                </div>
                <div>
                  <input type="radio" />
                  <label htmlFor="">Abroad</label>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {/* <p>Status</p> */}
                  <select name="" id="">
                    <option value="">Master’s degree - 2</option>
                    <option value="">Master’s degree - 3</option>
                    <option value="">Master’s degree - 4</option>
                  </select>
                </div>
                <div>
                  <Button
                    className={t["button-card"]}
                    style={{
                      background: "#268EFF",
                      color: "#fff",
                      borderRadius: 0,
                    }}
                  >
                    View List
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default SearchCard;
