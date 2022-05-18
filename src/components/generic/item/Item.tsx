import {Avatar, Box, Button, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";

export const Item = (props: ItemProps) => {
  if (props.text2) {
    return (
      <>
        <Card sx={{ minWidth: 200, margin: 1 }} variant="outlined" >
          <CardContent>
            <Box sx={{ align_items: 'center' }}>
              {renderAvatar(props.imageUrl, props.imageSize)}
              {renderText(props.text1, "h6")}
              {renderText(props.text2, "body1")}
            </Box>
          </CardContent>
          <CardActions>
            <Button size="small">
              See More
            </Button>
          </CardActions>
        </Card>
      </>
    )
  }
  return (
    <div className="item">
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          {renderAvatar(props.imageUrl, props.imageSize)}
          {renderText(props.text1, "h6")}
        </CardContent>
        <CardActions>
          <Button size="small">
            See More
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

const renderAvatar = (imageUrl: string, size: number) => {
  return (
    <Avatar src={imageUrl} sx={{width: size, height: size, margin: 'auto'}}/>
  )
}

const renderText = (text: string, type: "h6" | "body1") => {
  return (
    <Typography sx={{ textAlign: 'center' }} variant={type} gutterBottom component="div">
      {text}
    </Typography>
  )
}

export interface ItemProps {
  imageUrl: string;
  imageSize: number;
  text1: string;
  text2?: string;
}