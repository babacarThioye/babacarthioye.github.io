interface EmptyStateProps { label: string; text: string }
export function EmptyState({ label, text }: EmptyStateProps) { return <div className="empty-state"><span aria-hidden="true">+</span><div><strong>{label}</strong><p>{text}</p></div></div> }
