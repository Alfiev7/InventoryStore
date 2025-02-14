import ConfigFormFields from '../components/Config/ConfigFormFields';
import { useForm } from 'react-hook-form';
import Button from '../components/ui/Button';

export default function Config() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, 'Configuration saved!');
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg items-center justify-center flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Store Configuration</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <ConfigFormFields register={register} errors={errors} />
        <Button type="submit">Save Configuration</Button>
      </form>
    </div>
  );
}
