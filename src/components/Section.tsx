import {Item, ItemProps} from "./Item";
import "../styles/Section.css";

export const Section = (props: CarouselProps) => {
  const items: any[] = [];
  props.items.forEach(item => items.push(<Item imageUrl={item.imageUrl} text={item.text}/>))

  return (
    <div className="section">
      <h2>{props.title}</h2>
      <div className="carousel">{items}</div>
    </div>
  );
}

export interface CarouselProps {
  title: string;
  items: ItemProps[],
}