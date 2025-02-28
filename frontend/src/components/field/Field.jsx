export default function Field({ label, value }) {
    return (
      <div>
        <p className="">{label}:</p>
        <p className="text-lg text-purple-700">{value}</p>
      </div>
    );
  }
  