
import '@/styles/globals.css';
import { Box } from '@mui/material';

export default function App({ Component, pageProps }) {
  return (
    <Box sx={{ height: '100%' }}>
      <Component {...pageProps} />
    </Box>
  );
}
