export default function SegmentStats() {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Segment Comparison</h2>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div><strong>Desktop:</strong> 58% scroll, 3.9% CTR</div>
        <div><strong>Mobile:</strong> 72% scroll, 5.1% CTR</div>
      </div>
    </div>
  );
}
