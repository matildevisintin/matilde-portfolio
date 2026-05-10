import { quickFacts } from '../data/quickFacts'

const recruiterFacts = quickFacts.slice(0, 4)

export function CredibilityStrip() {
  return (
    <section
      aria-label="Credibility snapshot"
      className="border-b border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-5 py-6"
    >
      <div className="mx-auto max-w-6xl">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {recruiterFacts.map((fact) => (
            <li
              key={fact.id}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-card)] px-4 py-3"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                {fact.label}
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-200">{fact.value}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

