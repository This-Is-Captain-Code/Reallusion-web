
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import AgentInteraction from "./pages/AgentInteraction";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="/agent-interaction" element={<AgentInteraction />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
