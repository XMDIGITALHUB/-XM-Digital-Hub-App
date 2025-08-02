export default function VariantCompare() {
  const variants = [
    { label: 'Variant A', ctr: '4.1%', scroll: '72%' },
    { label: 'Variant B', ctr: '5.3%', scroll: '68%' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {variants.map((v, i) => (
        <div key={i} className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold text-gray-800">{v.label}</h3>
          <p className="text-sm text-gray-600">CTR: {v.ctr}</p>
          <p className="text-sm text-gray-600">Avg Scroll: {v.scroll}</p>
        </div>
      ))}
    </div>
  );
}
