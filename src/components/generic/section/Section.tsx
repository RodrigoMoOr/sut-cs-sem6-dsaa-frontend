import "./Section.css";

import {useEffect, useState} from "react";
import {Alert, Box, CircularProgress} from "@mui/material";
import {IAuthor, isAuthor} from "../../../interfaces/author.interface";
import {Item} from "../item/Item";
import {IBook, isBook} from "../../../interfaces/book.interface";

export const Section = <T extends unknown>(props: SectionProps<T>) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const {title, items, loading, error, itemImageSize } = props;

  useEffect(() => {
    if (isLoading != loading)
      setIsLoading(loading)
  }, [loading]);

  return (
    <div className="section">
      <h2>{title}</h2>
      {isLoading && <Box sx={{display: 'flex'}}><CircularProgress/></Box>}
      {!isLoading && error && <Box sx={{display: 'flex'}}><Alert severity="error">{error}</Alert></Box>}
      {!isLoading && !error && items && RenderItems(items, itemImageSize)}
    </div>
  );
}

const RenderItems = (items: unknown, imageSize: number) => {
  if (Array.isArray(items)) {
    if (isAuthor(items[0])) {
      return(
        <div className="carousel">
          {items.map((item: IAuthor) => <Item key={item.id} itemId={item.id} imageUrl={item.imageUrl} imageSize={imageSize} text1={`${item.name} ${item.surname}`} />)}
        </div>
      )
    }
    if(isBook(items[0])) {
      return (
        <div className="carousel">
          {items.map((item: IBook) => <Item imageUrl={item.coverImageURL} imageSize={imageSize} itemId={item.id} text1={item.title} text2={item?.subtitle} />)}
        </div>
      )
    }
  }
};

export interface SectionProps<T> {
  title: string;
  items?: T | null;
  loading: boolean;
  error: string | null;
  itemImageSize: number;
}