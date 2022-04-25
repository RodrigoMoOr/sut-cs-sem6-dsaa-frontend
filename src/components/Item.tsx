import {Avatar} from "@mui/material";

export const ItemComponent = (props: ItemComponentProps) => {
  return (
    <>
      <Avatar src={props.imageUrl} sx={{width: 64, height: 64}}/>
      <span>{props.text}</span>
    </>
  )
}

interface ItemComponentProps {
  imageUrl: string;
  text: string;
}