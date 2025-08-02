export default function AnalyticsFilterBar() {
  return (
    <div className="flex gap-4 items-center">
      <select className="p-2 border rounded text-sm">
        <option>All Pages</option>
        <option>/home</option>
        <option>/pricing</option>
      </select>
      <select className="p-2 border rounded text-sm">
        <option>All Devices</option>
        <option>Desktop</option>
        <option>Mobile</option>
      </select>
    </div>
  );
}
