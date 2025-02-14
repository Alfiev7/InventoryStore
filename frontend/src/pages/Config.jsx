import ConfigFormFields from '../components/Config/ConfigFormFields';
import { USER_CONFIG_KEY } from '../constants/localStorageKeys';
import { useForm } from 'react-hook-form';

export default function Config() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem(USER_CONFIG_KEY, JSON.stringify(data));
    alert('Configuration saved!');
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg items-center justify-center flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Store Configuration</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <ConfigFormFields register={register} errors={errors} />
        <button type="submit" className="w-full bg-purple-500 text-white p-2 rounded-md">
          Save Configuration
        </button>
      </form>
    </div>
  );
}
