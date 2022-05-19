import {PageProps} from "../components/generic/page/Page";

export const genrePageMock: PageProps = {
  title: "Genre: Biographies",
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
    'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat' +
    ' cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  sections: [
    {
      title: 'Popular Biographies',
      items: [
        {
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41FvFVUZLjL._SX328_BO1,204,203,200_.jpg',
          imageSize: 160,
          itemId: 1,
          text1: 'The Hobbit',
          text2: 'Lanie Wody description'
        },
        {
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41FvFVUZLjL._SX328_BO1,204,203,200_.jpg',
          imageSize: 160,
          itemId: 1,
          text1: 'The Hobbit',
          text2: 'Lanie Wody description'
        },
        {
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41FvFVUZLjL._SX328_BO1,204,203,200_.jpg',
          imageSize: 160,
          itemId: 1,
          text1: 'The Hobbit',
          text2: 'Lanie Wody description'
        },
      ]
    },
    {
      title: 'Best-Sellers',
      items: [
        {
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41FvFVUZLjL._SX328_BO1,204,203,200_.jpg',
          imageSize: 160,
          itemId: 1,
          text1: 'The Hobbit',
          text2: 'Lanie Wody description'
        },
      ]
    },
  ]
}