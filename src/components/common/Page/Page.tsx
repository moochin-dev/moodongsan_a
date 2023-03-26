import { PageWrapper } from "./Page.styles";
import { IPageProps } from "./Page.types";

export const Page = (props: IPageProps) => {
  return <PageWrapper>{props.children}</PageWrapper>;
};
