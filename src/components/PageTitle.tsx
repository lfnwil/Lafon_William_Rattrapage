interface PageTitleProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageTitle({ eyebrow, title, description }: PageTitleProps) {
  return (
    <header className="page-title">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="muted">{description}</p>
    </header>
  );
}
