import {
    Box,
    Typography,
    Stack,
    Link
} from "@mui/material";
import {
    Telegram,
    Twitter,
    GitHub
} from "@mui/icons-material";

export default function Footer() {
    return (
        <Box component="footer" sx={{ py: 5 }}>
            <Stack
                direction="row"
                justifyContent="center"
                spacing={4}
                sx={{ mb: 5 }}
            >
                <Link
                    sx={{ textDecoration: "none" }}
                    href="https://t.me/usofnem"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Telegram fontSize="large" htmlColor="#1769aa" />
                </Link>
                <Link
                    sx={{ textDecoration: "none" }}
                    href="https://twitter.com/usofnem"
                    target="_blank"
                    rel="https://t.me/lisprocoin"
                >
                    <Twitter fontSize="large" htmlColor="#1769aa" />
                </Link>
                <Link
                    sx={{ textDecoration: "none" }}
                    href="https://github.com/15-Lippo/audit-Lisprocoin-Smart-contract/blob/master/Lisprocoin%20_0x70E546c7a2cA4495cFcbE263a3b6D5ce68B2204C.pdf
                    target="_blank""
                    rel="https://twitter.com/lisprocoin?t=dwlsM930ZZdcfDxLgsCziA&s=09"
                >
                    <GitHub fontSize="large" htmlColor="#1769aa" />
                </Link>
            </Stack>
            <Typography variant="body2" align="center">
                Build with ❤ by Lippo Francesco engenier
            </Typography>
        </Box>
    );
}
