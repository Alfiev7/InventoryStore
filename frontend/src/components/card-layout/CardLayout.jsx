export default function CardLayout({ children }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full border border-gray-200 flex flex-col">
      {children}
    </div>
  );
}
