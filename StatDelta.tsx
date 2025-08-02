export default function StatDelta() {
  const stats = [
    { label: 'Sessions', change: '+8.3%' },
    { label: 'Conversions', change: '+2.1%' },
    { label: 'Bounce Rate', change: '-1.7%' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {stats.map((s, i) => (
        <div key={i} className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">{s.label}</p>
          <p className={`text-lg font-medium ${s.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
            {s.change}
          </p>
        </div>
      ))}
    </div>
  );
}
