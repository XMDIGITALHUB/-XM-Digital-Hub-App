export default function SurveyFeedback() {
  const responses = [
    "The page loads slowly.",
    "I couldn’t find the contact form.",
  ];
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Survey Feedback</h2>
      <ul className="list-disc ml-5 text-sm text-gray-700">
        {responses.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
    </div>
  );
}
