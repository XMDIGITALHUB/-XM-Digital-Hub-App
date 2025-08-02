export default function InlineEditor() {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Edit Variant Content</h2>
      <label className="block mb-2 text-sm text-gray-600">Headline</label>
      <input type="text" className="w-full p-2 border rounded mb-4" defaultValue="Get started with our platform today." />
      <label className="block mb-2 text-sm text-gray-600">CTA Text</label>
      <input type="text" className="w-full p-2 border rounded" defaultValue="Try Free" />
    </div>
  );
}
