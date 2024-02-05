import { ButtonGroup } from "@mui/material"
import { Button } from "@mui/material"
import { Box } from "@mui/material"

export function CallToAction() {
    return (
        <Box
            sx={{
                width: {
                    xs: "60%",
                    sm: "50%",
                    md: "40%",
                    lg: "30%",
                    xl: "20%",
                },
            }}
        >
        <ButtonGroup 
            color="secondary" 
            variant="contained" 
            size="large" 
            fullWidth={true}
        >
            <Button>
                Register
            </Button>
            <Button>
                Login
            </Button>
        </ButtonGroup>
    </Box>
    )
}