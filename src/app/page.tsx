import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/material";

export default function Home() {
    
  return (
    <Box 
      bgcolor='primary.main'
    >
    <Container
      maxWidth={false}
      disableGutters
    >
      <Typography variant="h2" color='contrastText'>Hola mundo, esto es el inicio de algo genial</Typography>
      <Box bgcolor='secondary.light'>
        <Typography variant="h3" color='contrastText'>Esto es una prueba</Typography>
      </Box>
    </Container>
    </Box>
  );
}
