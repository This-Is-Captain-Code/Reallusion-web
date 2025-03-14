
import { Box, Container, ThemeProvider, createTheme } from '@mui/material';
import CreateAgent from './pages/CreateAgent';
import Marketplace from './pages/Marketplace';
import AgentInteraction from './pages/AgentInteraction';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        width: '100%',
        height: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        overflow: 'hidden'
      }}>
        <Marketplace />
      </Box>
    </ThemeProvider>
  );
}

export default App;
