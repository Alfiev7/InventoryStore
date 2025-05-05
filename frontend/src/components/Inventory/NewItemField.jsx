import { DOLLAR } from '../../constants/globals';

export default function NewItemField({ field, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray-600 text-sm">{field.title}</p>
      {field.type === 'select' ? (
        <select
          name={field.name}
          value={value}
          onChange={onChange}
          className="border border-gray-300 p-2 rounded-lg text-sm w-full"
          required
        >
          <option value="">Select category</option>
          {options?.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <div className="relative">
          {field.prefix && <span className="absolute left-3 top-2.5 text-gray-500">{DOLLAR}</span>}
          <input
            type={field.type}
            name={field.name}
            value={value}
            onChange={onChange}
            placeholder={field.placeholder}
            className={`border border-gray-300 p-2 ${field.prefix ? 'pl-7' : ''} rounded-lg text-sm w-full`}
            required
          />
        </div>
      )}
    </div>
  );
}
