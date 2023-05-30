import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  phone: string;
};

const FormOne: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <p>
          <span>Name</span>
          {errors.name && <span>{errors.name.message}</span>}
        </p>
        <input
          type="text"
          placeholder="e.g. Stephen King"
          {...register('name', { required: 'This field is required' })}
        />
      </label>
      <label>
        <p>Email Address</p>
        <input
          type="email"
          placeholder="e.g. Stephenking@lorem.com"
          {...register('email', {
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'email specified incorrectly',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </label>
      <label>
        <p>
          <span>Phone Number</span>
          {errors.phone && <span>{errors.phone.message}</span>}
        </p>
        <input
          type="number"
          placeholder="e.g. +1 234 567 890"
          {...register('phone', { required: 'This field is required' })}
        />
      </label>
      <input type="submit" />
    </form>
  );
};
export default FormOne;
