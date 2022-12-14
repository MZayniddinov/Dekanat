import { Routes, Route } from "react-router-dom";

//pages
import Login from "./login/Login";
import SegmentaOnline from "./segmenta-online/SegmentaOnline";
import StageIntership from "./stage-intership/StageIntership";
import Ticket from "./ticket/Ticket";


export default function index(){
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/ticket" element={<Ticket/>} />
      <Route path="/segmenta-online" element={<SegmentaOnline/>} />
      <Route path="/stage-intership" element={<StageIntership/>} />
    </Routes>
  )
}