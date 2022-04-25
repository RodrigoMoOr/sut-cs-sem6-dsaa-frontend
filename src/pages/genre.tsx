import {Page} from "../components/Page";
import {genrePageMock} from "../mocks/genre-page";

export const Genre = () => {
  return (
    <Page title={genrePageMock.title} description={genrePageMock.description} sections={genrePageMock.sections}/>
  )
}

interface GenreProps {
  genreName: string;
}