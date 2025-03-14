import { Box, Typography, Container, Paper } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/Experience";
import { KeyboardControls, Loader } from "@react-three/drei";
import { useConvaiClient } from "../hooks/useConvaiClient";
import ChatBubble from "../components/chat/Chat";
import { useEffect } from "react";

function AgentInteraction() {
  const { client } = useConvaiClient(
    "9b11cba4-a37b-11ef-b34c-42010a7be016",
    "d21a7c085eaaea922b64b294d702b74a",
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "BINANCE:APTUSDT",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "enable_publishing": false,
        "hide_top_toolbar": true,
        "hide_legend": false,
        "save_image": false,
        "calendar": false,
        "hide_volume": false,
        "support_host": "https://www.tradingview.com"
      }`;

    const container = document.getElementById("tradingview-widget");
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "300px 1fr",
          gridTemplateRows: "400px 1fr",
          gap: 0,
          height: "calc(100vh - 64px)",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            bgcolor: "rgba(0,0,0,0.8)",
            p: 3,
            borderRadius: 0,
            borderRight: "1px solid rgba(255,255,255,0.1)",
            gridRow: "1 / -1",
            overflow: "auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "VT323",
              color: "white",
              mb: 2,
            }}
          >
            Control Panel
          </Typography>
        </Paper>

        <Box
          id="tradingview-widget"
          sx={{
            bgcolor: "rgba(0,0,0,0.8)",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            overflow: "hidden",
          }}
        >
          <div
            className="tradingview-widget-container"
            style={{ height: "100%" }}
          >
            <div
              className="tradingview-widget-container__widget"
              style={{ height: "100%" }}
            ></div>
          </div>
        </Box>

        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            gridRow: "2/3",
            gridColumn: "2/3",
          }}
        >
          <KeyboardControls
            map={[
              { name: "forward", keys: ["ArrowUp", "w", "W"] },
              { name: "backward", keys: ["ArrowDown", "s", "S"] },
              { name: "left", keys: ["ArrowLeft", "a", "A"] },
              { name: "right", keys: ["ArrowRight", "d", "D"] },
              { name: "jump", keys: ["Space"] },
            ]}
          >
            <Box sx={{ width: "100%", height: "70vh", position: "relative" }}>
              <Loader />
              <Canvas
                shadows
                camera={{
                  fov: 45,
                  near: 0.1,
                  far: 200,
                  position: [2.5, 4, 6],
                }}
              >
                <Experience client={client} />
              </Canvas>
            </Box>
          </KeyboardControls>

          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              bgcolor: "background.paper",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              p: 2,
              maxHeight: "30vh",
            }}
          >
            <ChatBubble client={client} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AgentInteraction;