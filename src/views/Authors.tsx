import {apiClient} from "../adapters/api-client";
import {useAxios} from "../hooks/axios-hooks";
import {IAuthor} from "../interfaces/author.interface";
import {SectionProps} from "../components/generic/section/Section";
import {Page} from "../components/generic/page/Page";
import {authorsPageMock} from "../mocks/authors-page";

export const Authors = () => {
  const [authors, error, loading] = useAxios<IAuthor[]>({
    axiosInstance: apiClient,
    method: 'GET',
    url: 'authors',
  });

  const section: SectionProps<IAuthor[]> = {
    title: 'All Authors',
    items: authors,
    loading,
    error,
    itemImageSize: 120,
  }

  return (
    <Page title={authorsPageMock.title} description={authorsPageMock.description} sections={authorsPageMock.sections}/>
  )
}