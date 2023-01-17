import { ReactElement, ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode; // anything in react, does not have to be render-able
};

const Section = ({
  children,
  title = "Custom Subheading Default Title",
}: SectionProps): ReactElement => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};

export default Section;
