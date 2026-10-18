// The logo's three bars as one solid band: blue, green and red in the
// proportions they have in the AJ mark. Draws in from the left on load.
const SEGMENTS = [
  { tone: 'bg-brand-blue', grow: 5 },
  { tone: 'bg-brand-green', grow: 2 },
  { tone: 'bg-brand-red', grow: 4 },
];

export default function Stripe({ className = 'h-3' }) {
  return (
    <div aria-hidden="true" className={`flex ${className}`}>
      {SEGMENTS.map((segment, i) => (
        <span key={segment.tone} className={`stripe-bar h-full ${segment.tone}`} style={{ flexGrow: segment.grow, '--i': i }} />
      ))}
    </div>
  );
}
