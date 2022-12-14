import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import t from "./Bookmark.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillExclamationCircle } from "react-icons/ai";

const BookMark = () => {
  return (
    <div className="ticket">
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
              <h3>Bookmarks</h3>
            </div>
          </div>
          <Card sx={{}} style={{ borderRadius: 0, marginTop: 10 }}>
            <div
              style={{ borderBottom: "1px solid black", padding: "5.4px 0" }}
            >
              <p style={{ padding: "0 10px" }}>Lorem ipsum</p>
            </div>
            <div
              style={{ borderBottom: "1px solid black", padding: "5.4px 0" }}
            >
              <p style={{ padding: "0 10px" }}>Lorem ipsum</p>
            </div>
            <div
              style={{ borderBottom: "1px solid black", padding: "5.4px 0" }}
            >
              <p style={{ padding: "0 10px" }}>Lorem ipsum</p>
            </div>
            <div
              style={{ borderBottom: "1px solid black", padding: "5.4px 0" }}
            >
              <p style={{ padding: "0 10px" }}>Lorem ipsum</p>
            </div>
            <div
              style={{ borderBottom: "1px solid black", padding: "5.4px 0" }}
            >
              <p style={{ padding: "0 10px" }}>Lorem ipsum</p>
            </div>
            <div
              style={{ borderBottom: "1px solid black", padding: "5.4px 0" }}
            >
              <p style={{ padding: "0 10px" }}>Lorem ipsum</p>
            </div>
            <div
              style={{ borderBottom: "1px solid black", padding: "5.4px 0" }}
            >
              <p style={{ padding: "0 10px" }}>Lorem ipsum</p>
            </div>
          </Card>
          <Button
            style={{
              textAlign: "center",
              margin: "auto",
              justifyContent: "center",
              width: "100%",
              color: "black",
            }}
          >
            check <AiOutlineArrowRight />
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default BookMark;