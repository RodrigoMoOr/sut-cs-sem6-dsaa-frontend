import {useAxios} from "../hooks/axios-hooks";
import {ApiResponse} from "../interfaces/api-response.interface";
import {IGenre} from "../interfaces/genre.interface";
import {apiClient} from "../adapters/api-client";
import {SectionProps} from "../components/generic/section/Section";
import {Page} from "../components/generic/page/Page";
import {genresPageMock} from "../mocks/genres-page";

export const Genres = () => {
  const [response, error, loading] = useAxios<ApiResponse<IGenre[]>>({
    axiosInstance: apiClient,
    method: 'GET',
    url: 'genres',
  });

  const section: SectionProps<IGenre[]> = {
    title: 'All Genres',
    items: response?.items,
    loading,
    error,
    itemImageSize: 120,
    itemsPath: 'genres',
  }
  
  return (
    <Page title={genresPageMock.title} description={genresPageMock.description} sections={[section]} />
  )
}