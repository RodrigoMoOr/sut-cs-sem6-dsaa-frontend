import {Section, SectionProps} from "../section/Section";
import "./Page.css"
import {Avatar, Typography} from "@mui/material";

export const Page = (props: PageProps) => {
  const sections: any[] = [];
  props.sections.forEach(section => sections.push(<Section items={section.items} title={section.title}/>))

  if (props.imageURL) {
    return (
      <div className="page">
        <header>
          <Avatar src={props.imageURL} sx={{ width: 120, height: 120, margin: 2 }} />
          <Typography variant="h2" component="div" gutterBottom>
            {props.title}
          </Typography>
          <span className="description">{props.description}</span>
        </header>
        {sections}
      </div>
    )
  }
  return (
    <div className="page">
      <header>
        <Typography variant="h2" component="div" gutterBottom>
          {props.title}
        </Typography>
        <span className="description">{props.description}</span>
      </header>
      {sections}
    </div>
  )
}

export interface PageProps {
  imageURL?: string;
  title: string;
  description: string;
  sections: SectionProps[];
}