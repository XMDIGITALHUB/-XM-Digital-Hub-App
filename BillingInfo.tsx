export default function BillingInfo() {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Billing Details</h2>
      <p className="text-sm text-gray-600">Card ending in 4242 · Expires 09/26</p>
      <button className="mt-2 text-blue-600 text-sm">Update Payment Info</button>
    </div>
  );
}
