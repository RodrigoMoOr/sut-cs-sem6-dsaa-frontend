import {Page} from "../components/page";
import {authorPageMock} from "../mocks/author-page";

export const Author = () => {

  return (
    <>
      <Page title={authorPageMock.title} description={authorPageMock.description} sections={authorPageMock.sections}/>
    </>
  )
}