export default function TeamManagement() {
  const team = [
    { name: 'Alex', role: 'Admin' },
    { name: 'Jamie', role: 'Editor' },
  ];
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Team Members</h2>
      <ul className="space-y-2 text-sm">
        {team.map((member, i) => (
          <li key={i} className="flex justify-between">
            <span>{member.name}</span>
            <span className="text-gray-500">{member.role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
