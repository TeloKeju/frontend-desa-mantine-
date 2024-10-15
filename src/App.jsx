// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MantineProvider } from "@mantine/core";

import "./App.css";

import Home from "./pages/home";
import Profile from "./pages/profile";
import Listing from "./pages/listing";
import Berita from "./pages/berita";
import Belanja from "./pages/belanja";
import Ppid from "./pages/ppid";

import Pemerintah from "./pages/pemerintah";
import Wisata from "./pages/wisata";
import Galeri from "./pages/galeri";
import DetailBerita from "./pages/detail/detailBerita";

import Penduduk from "./pages/infografis/penduduk";
import Apbdes from "./pages/infografis/apbdes";
import Stunting from "./pages/infografis/stunting";
import Bansos from "./pages/infografis/bansos";
import Idm from "./pages/infografis/idm";
import Sdgs from "./pages/infografis/sdgs";

// const theme = createTheme({
//   fontFamily: "Outfit",
// });

function App() {
  return (
    <>
      <MantineProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/belanja" element={<Belanja />} />
            <Route path="/ppid" element={<Ppid />} />

            <Route path="/pemerintah" element={<Pemerintah />} />
            <Route path="/wisata" element={<Wisata />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/berita/detailberita" element={<DetailBerita />} />

            <Route path="/infografis/penduduk" element={<Penduduk />} />
            <Route path="/infografis/apbdes" element={<Apbdes />} />
            <Route path="/infografis/stunting" element={<Stunting />} />
            <Route path="/infografis/bansos" element={<Bansos />} />
            <Route path="/infografis/idm" element={<Idm />} />
            <Route path="/infografis/sdgs" element={<Sdgs />} />
          </Routes>
        </Router>
      </MantineProvider>
      ;
    </>
  );
}

export default App;
