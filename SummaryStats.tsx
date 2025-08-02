export default function SummaryStats() {
  const stats = [
    { label: 'Sessions', value: '12,340' },
    { label: 'Avg Scroll Depth', value: '68%' },
    { label: 'CTR', value: '4.7%' },
    { label: 'Bounce Rate', value: '39%' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-4 rounded shadow text-center">
          <div className="text-sm text-gray-500">{stat.label}</div>
          <div className="text-xl font-semibold text-gray-900">{stat.value}</div>
        </div>
      ))}
    </div>
  );
}
