import Card from "@mui/material/Card";
import t from "./GraduateCard.module.css";
import Button from "@mui/material/Button";
import { AiFillExclamationCircle } from "react-icons/ai";

const GraduateCard = () => {
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
            <div className="mini_container" style={{ padding: "0 20px" }}>
              <div style={{ lineHeight: "30px" }}>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
              </div>

              <div className={t["graduate_inputs"]}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label>Programm</label>
                  <input type="text" />
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
                    View
                  </Button>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label>Search</label>
                  <input type="text" />
                </div>
              </div>
              <div className={t["graduate_links"]}>
                <a href="#!">Company Name</a>
                <a href="#!">Cod</a>
                <a href="#!">Internship title</a>
                <a href="#!">Location</a>
                <a href="#!">Date of publication</a>
                <a href="#!">CV</a>
              </div>
              {/* <p>showing <span>0</span> of <span>0</span> entries</p> */}
              <div className={t["graduate_showing"]}>
                <div>
                  <label htmlFor="">show</label>
                  <select name="" id="">
                    <option value="">50</option>
                    <option value="">25</option>
                    <option value="">0</option>
                  </select>
                  <label htmlFor="">entries</label>
                </div>
                <div>
                  <button>prev</button>
                  <button>next</button>
                </div>
              </div>
            </div>
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default GraduateCard;
