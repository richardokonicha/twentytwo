import { Card, CardContent, Box, Typography } from "@mui/material"


const CardSlot = function (x, y, width, height, card) {
    return (
        <Box position={'absolute'} bottom={8} right={8}>
            <Card>
                <CardContent>
                    <Typography fontSize={12}>
                        Here is the little part of the internet I carved out for me and me alone.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default CardSlot;