interface PageHeaderProps { title: string; intro: string }

export function PageHeader({ title, intro }: PageHeaderProps) {
  return <header className="section-page-heading"><p className="page-eyebrow">Portfolio</p><h2>{title}</h2><p>{intro}</p></header>
}
