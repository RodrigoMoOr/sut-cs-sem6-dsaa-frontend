import {PageProps} from "../components/generic/page/Page";

export const homePageMock: PageProps = {
  title: 'Home',
  description: 'moj polski jest bradzo fajne',
  sections: [
    {
      title: 'New Books!',
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
    {
      title: 'Best Selling Authors',
      items: [
        {
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
          imageSize: 160,
          itemId: 1,
          text1: 'Rodrigo Morales',
          text2: 'Lanie Wody King'
        },
      ]
    },
    {
      title: 'But wait, there\'s more!',
      items: [
        {
          imageUrl: 'https://cdn.discordapp.com/attachments/948988183000006656/978347339179773972/unknown.png',
          imageSize: 160,
          itemId: 1,
          text1: 'Green Book',
          text2: 'Special offer: 40 PLN'
        }
      ]
    }
  ]
}