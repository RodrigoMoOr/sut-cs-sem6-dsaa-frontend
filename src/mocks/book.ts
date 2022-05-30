import {IBook} from "../interfaces/book.interface";

export const bookMock: IBook = {
  id: 1,
  title: 'Red Rising',
  subtitle: 'Books 1 of the Red Rising Saga',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
  coverImageURL: 'https://cdn.discordapp.com/attachments/948362388166561822/979368824719687690/atlas.png'
};

export const booksMock: IBook[] = [
  bookMock,
  bookMock,
  bookMock
];