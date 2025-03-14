import { Box } from "@mui/material";
import Marketplace from "./pages/Marketplace";
import CreateAgent from "./pages/CreateAgent";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Navbar />
      <Marketplace />
    </Box>
  );
}

export default App;
