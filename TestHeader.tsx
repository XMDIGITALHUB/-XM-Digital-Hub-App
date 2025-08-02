export default function TestHeader() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Homepage CTA A/B Test</h1>
        <p className="text-sm text-gray-500">Running · Aug 15 – Aug 31</p>
      </div>
      <span className="text-blue-600 text-sm">Test ID: ab-123456</span>
    </div>
  );
}
