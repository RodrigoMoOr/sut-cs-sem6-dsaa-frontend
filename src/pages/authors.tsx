import {Page} from "../components/page";
import {authorsPageMock} from "../mocks/authors-page";
import {apiClient} from "../adapters/api-client";
import {SectionProps} from "../components/section";
import {ItemProps} from "../components/item";
import {useEffect, useState} from "react";
import {Author} from "../authors-reponse.interface";

export const Authors = () => {

  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    apiClient.get('authors').then((response) => setAuthors(response.data))
  }, []);

  const items: ItemProps[] = [];
  authors.forEach(author => {
    const item: ItemProps = {
      text: author.name + author.surname,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Blanka_Lipi%C5%84ska.JPG/800px-Blanka_Lipi%C5%84ska.JPG'
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