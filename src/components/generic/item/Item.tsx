import {Avatar} from "@mui/material";
import "../../../styles/Item.css";

export const Item = (props: ItemProps) => {
  return (
    <div className="item">
      <Avatar src={props.imageUrl} sx={{width: 96, height: 96}}/>
      <span>{props.text}</span>
    </div>
  )
}

export interface ItemProps {
  text: string;
  imageUrl: string;
}