import {Item, ItemProps} from "./Item";

export const Carousel = (props: CarouselProps) => {
  const items: any[] = [];
  props.items.forEach(item => items.push(<Item imageUrl={item.imageUrl} text={item.text}/>))

  return (
    <>
      <h2>{props.title}</h2>
      {items}
    </>
  );
}

interface CarouselProps {
  items: ItemProps[],
  title: string;
}

export const mockItems: ItemProps[] = [
  {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
    text: 'Rodrigo'
  },
  {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
    text: 'Andres'
  },
  {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
    text: 'Andrzej'
  }
]