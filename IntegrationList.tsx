export default function IntegrationList() {
  const integrations = ['Google Analytics', 'Hotjar', 'OpenAI', 'Stripe'];

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Connected Integrations</h2>
      <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
        {integrations.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}
