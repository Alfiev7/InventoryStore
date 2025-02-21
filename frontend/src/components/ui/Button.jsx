export default function Button({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-purple-500 text-white p-2 rounded-md hover:bg-purple-600 cursor-pointer transition-all ${className}`}
    >
      {children}
    </button>
  );
}
