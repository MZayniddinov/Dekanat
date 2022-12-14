//components
import Header from "../../components/header/Header";
import t from "./StageIntership.module.css";
import TicketCard from "../../components/ticket-card/TicketCard";
import BookMark from "../../components/book-mark/Bookmark";
import SearchCard from "../../components/search-card/SearchCard";
import GraduateCard from "../../components/graduate-card/GraduateCard";

const StageIntership = () => {
  return (
    <>
      <Header />
      <div className={t["stageInter"]}>
        {/* Stage inter Ticket left block */}
        <div className="stageInterLeft">
          <TicketCard />
          <BookMark />
        </div>
        {/* Stage inter Ticket right block */}
        <div className="stageInterRight">
          <SearchCard />
          <GraduateCard />
        </div>
      </div>
    </>
  );
};

export default StageIntership;