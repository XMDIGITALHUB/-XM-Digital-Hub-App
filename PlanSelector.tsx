export default function PlanSelector() {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Plan</h2>
      <select className="w-full p-2 border rounded text-sm">
        <option>Free Plan</option>
        <option>Pro Plan - $49/month</option>
        <option>Enterprise</option>
      </select>
    </div>
  );
}
