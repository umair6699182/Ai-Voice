import * as React from "react";
import { alpha, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 10, sm: 15 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        {/* <Stack
          spacing={2}
          useFlexGap
          sx={{ width: { xs: "100%", sm: "70%" } }}
         
        > */}

        <Box
          sx={{
            display: "flex", // Ensure flexbox layout for responsive adjustments
            flexDirection: "column", // Initial vertical stacking
            justifyContent: "center", // Center content vertically
            alignItems: "center", // Center content horizontally
            width: "100%", // Take up full width
            minHeight: 500, // Set a minimum height for visual consistency
            "@media (min-width: 768px)": {
              // For screens wider than 768px (tablet and larger)
              flexDirection: "row", // Switch to horizontal layout
              justifyContent: "space-between", // Distribute boxes horizontally
              alignItems: "center", // Align boxes vertically
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%", // Take up full width initially
              maxWidth: { xs: "unset", md: "50%" }, // Limit width on larger screens for text
              order: { xs: 2, md: 1 }, // Position text above image on larger screens
            }}
          >
            <Typography
              variant="h1"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignSelf: "center",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "clamp(3.5rem, 10vw, 4rem)",
              }}
            >
              AI Character &nbsp;
            </Typography>
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
                fontWeight: "bold",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            >
              Voice Generator
            </Typography>
            <Typography
              textAlign="center"
              color="text.secondary"
              sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
            >
              Generate a character voice instantly using invideo's AI character
              voice generator. Prompt invideo AI to generate a video in your
              desired character's voice and it will create a video within
              seconds
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
            >
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                style={{ borderRadius: 15 }}
                aria-label="Enter your email address"
                placeholder="Your email address"
                inputProps={{
                  autoComplete: "off",
                  "aria-label": "Enter your email address",
                }}
              />
              <Button variant="contained" color="primary">
                Start now
              </Button>
            </Stack>
            <Typography
              variant="caption"
              textAlign="center"
              sx={{ opacity: 0.8 }}
            >
              By clicking &quot;Start now&quot; you agree to our&nbsp;
              <Link href="#" color="primary">
                Terms & Conditions
              </Link>
              .
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%", // Take up full width initially
              maxWidth: { xs: "unset", md: "50%" }, // Limit width on larger screens for image
              order: { xs: 1, md: 2 }, // Position image below text on smaller screens
            }}
          >
            <img
              src="https://www.altered.ai/_next/static/media/HeroImage01.d8c8dc7a.webp"
              width={500}
            />
          </Box>
        </Box>

        {/* </Stack> */}

        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: "center",
            height: { xs: 200, sm: 700 },
            width: "100%",
            backgroundImage:
              theme.palette.mode === "light"
                ? 'url("https://cdn.prod.website-files.com/621dae3ca310b354c76e0abd/640f3fef495e69f3d495adb7_AI%20Voice%20Effects-p-2000.webp")'
                : 'url("/static/images/templates/templates-images/hero-dark.png")',
            backgroundSize: "cover",
            borderRadius: "10px",
            outline: "1px solid",
            outlineColor:
              theme.palette.mode === "light"
                ? alpha("#BFCCD9", 0.5)
                : alpha("#9CCCFC", 0.1),
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
                : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
          })}
        />
      </Container>
    </Box>
  );
}
