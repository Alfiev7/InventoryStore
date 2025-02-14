export default function AuthenticationForm({ title, subtitle, onSubmit, children }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 items-center">
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-2xl">{title}</h1>
        {subtitle && <h2 className="italic text-gray-500 text-sm">{subtitle}</h2>}
      </div>
      {children}
    </form>
  );
}
