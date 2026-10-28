import { timeline } from '../../data/portfolio'
export type TimelineKind = 'teaching' | 'experiences' | 'education'
export function Timeline({ kind }: { kind: TimelineKind }) { return <div className="timeline">{timeline[kind].map((item) => <article className="timeline-item" key={item.title}><span>{item.period}</span><div><h3>{item.title}</h3><strong>{item.org}</strong><p>{item.description}</p></div></article>)}</div> }
