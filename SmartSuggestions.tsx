export default function SmartSuggestions() {
  const suggestions = [
    { idea: 'Move primary CTA higher on homepage', reason: 'Users drop off before scrolling down' },
    { idea: 'Test shorter headline on product page', reason: 'Bounce rate above average' },
  ];

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Smart Suggestions</h2>
      <ul className="space-y-3">
        {suggestions.map((s, i) => (
          <li key={i}>
            <p className="font-medium text-blue-600">{s.idea}</p>
            <p className="text-sm text-gray-500">{s.reason}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
