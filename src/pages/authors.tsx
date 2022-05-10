import {Page} from "../components/page";
import {authorsPageMock} from "../mocks/authors-page";

export const Authors = () => {

  return (
    <>
      <Page title={authorsPageMock.title} description={authorsPageMock.description} sections={authorsPageMock.sections}/>
    </>
  )
}