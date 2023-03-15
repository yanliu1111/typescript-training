import { ReactNode } from "react";

type SectionProps = { title?: string; children: ReactNode };
// ReactNode is a type that is used to represent a React child, lots of shows can be used as children
//chile is different with prop, children would be the sth we would put in between like we would type h2 or paragraph
// old: const Section: React.FC<{ title: string }> = ({ children, title }) => {
export const Section = ({
  children,
  title = "My Subheading",
}: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};
