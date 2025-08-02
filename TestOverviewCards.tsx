export default function TestOverviewCards() {
  const tests = [
    { title: 'Homepage CTA Test', result: '+11.2% CTR' },
    { title: 'Pricing Layout Test', result: '-2.4% Bounce' },
  ];

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Recent Tests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tests.map((test, i) => (
          <div key={i} className="p-4 border rounded">
            <h3 className="font-medium text-gray-800">{test.title}</h3>
            <p className="text-sm text-green-600">{test.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
