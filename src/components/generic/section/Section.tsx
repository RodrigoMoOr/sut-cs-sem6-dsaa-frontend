import {Item, ItemProps} from "../item/Item";
import "./Section.css";

export const Section = (props: SectionProps) => {
  const items: any[] = [];
  props.items.forEach(item => items.push(<Item imageUrl={item.imageUrl} imageSize={item.imageSize} text1={item.text1} text2={item.text2}/>))

  return (
    <div className="section">
      <h2>{props.title}</h2>
      <div className="carousel">{items}</div>
    </div>
  );
}

export interface SectionProps {
  title: string;
  items: ItemProps[],
}