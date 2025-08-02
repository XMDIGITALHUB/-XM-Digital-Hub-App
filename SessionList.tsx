export default function SessionList() {
  const sessions = [
    { id: 's-123', user: 'User 1', flag: 'rage click' },
    { id: 's-456', user: 'User 2', flag: 'early exit' },
  ];
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Sessions</h2>
      <ul className="space-y-2">
        {sessions.map((s, i) => (
          <li key={i} className="flex justify-between">
            <span>{s.user} - {s.flag}</span>
            <button className="text-blue-600 text-sm">Replay</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
