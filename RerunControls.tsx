export default function RerunControls() {
  return (
    <div className="flex gap-4 mt-4">
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Rerun Test</button>
      <button className="px-4 py-2 border rounded text-gray-700">Add Variant</button>
      <button className="px-4 py-2 border rounded text-gray-700">Duplicate & Edit</button>
    </div>
  );
}
