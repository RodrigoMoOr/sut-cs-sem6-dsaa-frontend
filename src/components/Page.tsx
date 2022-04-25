import {Section, CarouselProps} from "./Section";
import "../styles/Page.css"

export const Page = (props: PageProps) => {
  const sections: any[] = [];
  props.sections.forEach(section => sections.push(<Section items={section.items} title={section.title}/>))

  return (
    <div className="page">
      <header>
        <h1>{props.title}</h1>
        <span className="description">{props.description}</span>
      </header>
      {sections}
    </div>
  )
}

export interface PageProps {
  title: string;
  description: string;
  sections: CarouselProps[];
}