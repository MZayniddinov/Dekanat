import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import t from "./TicketCard.module.css";

const TicketCard = () => {
  return (
      <div className="ticket">
        <div className={t["container"]}>
          <Card sx={{}} style={{ borderRadius: 0 }}>
            <img src="https://via.placeholder.com/200x200" alt="" className={t["img"]} />
            <CardContent className={t["content"]}>
              <p style={{ textDecorationLine: "underline" }}>210000</p>
              <p style={{ marginTop: 5 }}>AKMAL RUSTAMOV</p>
            </CardContent>
            <Button
              className={t["button-card"]}
              style={{ background: "#268EFF", color: "#fff", borderRadius: 0 }}
            >
              IMPORTANT REMARKS
            </Button>
            <Card sx={{}} style={{ borderRadius: 0, marginTop: 10 }}>
              <CardContent className={t["content-p"]}>
                <p style={{ fontSize: "14px" }}>Codico fistale: RSMT</p>
                <p style={{ fontSize: "14px", marginTop: 10 }}>
                  PhD programm in:
                </p>
                <p style={{ fontWeight: 700 }}>
                  ELECTRICAL, ELECTRONICS AND COMMUNICATIONS ENGINEERING
                </p>
                <p>Common educational path</p>
                <p style={{ marginTop: 10 }}>Lastest enrollement</p>
                <p style={{ fontWeight: 700 }}>2021/2022 - Tempo piano</p>
                <p>3 enrollement corp 2019/20</p>
                <p>
                  Academic progress status:{" "}
                  <span style={{ fontWeight: 700, color: "#39AA45" }}>
                    ACTIVE
                  </span>
                </p>
                <p style={{}}>
                  Project member Employee faculty cotute inverse ID: 1234567
                </p>
              </CardContent>
            </Card>
          </Card>
        </div>
      </div>
  );
};

export default TicketCard;
