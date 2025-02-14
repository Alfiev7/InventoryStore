export default function Button({ type = 'button', children, onClick, className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-purple-500 text-white p-2 rounded-md hover:bg-purple-600 cursor-pointer transition-all ${className}`}
    >
      {children}
    </button>
  );
}
