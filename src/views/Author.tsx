import {Page} from "../components/generic/page/Page";
import {authorPageMock} from "../mocks/author-page";

export const Author = () => {

  return (
    <Page imageURL={authorPageMock.imageURL} title={authorPageMock.title} description={authorPageMock.description}
          sections={authorPageMock.sections}/>
  )
}