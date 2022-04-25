import {Avatar} from "@mui/material";

export const Item = (props: ItemProps) => {
  return (
    <>
      <Avatar src={props.imageUrl} sx={{width: 64, height: 64}}/>
      <span>{props.text}</span>
    </>
  )
}

export interface ItemProps {
  imageUrl: string;
  text: string;
}