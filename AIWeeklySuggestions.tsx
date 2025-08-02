export default function AIWeeklySuggestions() {
  const ideas = [
    "Test a progress bar on checkout",
    "Remove distracting banners from homepage",
    "Try shorter forms on lead pages",
  ];
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">AI-Generated Ideas</h2>
      <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
        {ideas.map((idea, i) => <li key={i}>{idea}</li>)}
      </ul>
    </div>
  );
}
