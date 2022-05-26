import {authorsPageMock} from "../mocks/authors-page";
import {apiClient} from "../adapters/api-client";
import {useEffect, useState} from "react";
import {Author} from "../interfaces/api-responses/authors-page.interface";
import {ItemProps} from "../components/generic/item/Item";
import {SectionProps} from "../components/generic/section/Section";
import {Page} from "../components/generic/page/Page";

export const Authors = () => {

  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    apiClient.get('authors').then((response) => setAuthors(response.data))
  }, []);

  const items: ItemProps[] = [];
  authors.forEach(author => {
    const item: ItemProps = {
      imageUrl: author.imageUrl,
      imageSize: 120,
      itemId: author.id,
      text1: `${author.name}  ${author.surname}`,
    }
    items.push(item);
  })

  const section: SectionProps = {
    title: 'Authors',
    items: items,
  }

  return (
    <>
      <Page title={authorsPageMock.title} description={authorsPageMock.description} sections={[section]}/>
    </>
  )
}