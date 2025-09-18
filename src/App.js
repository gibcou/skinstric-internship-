import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./pages/000";
import LoadingCam from "./pages/001";
import Name from "./pages/002";
import Image from "./pages/005";
import PrepAnalysis from "./pages/007";
import AIAnalysis from "./pages/011";
import Demographics from "./pages/012";
import Results from "./pages/013";
import InfoLoading from "./pages/014";
import City from "./pages/504";
import InfoLoaded from "./pages/505";
import Camera from "./pages/camera";




function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/name" element={<Name />} />
                <Route path="/city" element={<City />} />
                <Route path="/infoloading" element={<InfoLoading />} />
                <Route path="/infoloaded" element={<InfoLoaded />} />
                <Route path="/image" element={<Image />} />
                <Route path="/loadingcam" element={<LoadingCam />} />
                <Route path="/camera" element={<Camera />} />
                <Route path="/prepanalysis" element={<PrepAnalysis />} />
                <Route path="/aianalysis" element={<AIAnalysis />} />
                <Route path="/demographics" element={<Demographics />} />
                <Route path="/results" element={<Results />} />
            </Routes>
        </Router>
    );
}

export default App;