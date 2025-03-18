<<<<<<< Updated upstream
import CreateAgent from './pages/CreateAgent';
import Marketplace from './pages/Marketplace';
import AgentInteraction from './pages/AgentInteraction';
import './styles/globals.css';
import './styles/ui.css';

function App() {
  return (
    <div className="w-full h-full">
      <Marketplace />
    </div>
=======
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import AgentInteraction from "./pages/AgentInteraction";
import CreateAgent from "./pages/CreateAgent";
import FetchAgents from "./pages/FetchAgents";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="/agent-interaction" element={<AgentInteraction />} />
          <Route path="/create-agent" element={<CreateAgent />} />
          <Route path="/fetch-agents" element={<FetchAgents />} />
        </Routes>
      </Box>
    </BrowserRouter>
>>>>>>> Stashed changes
  );
}

export default App;