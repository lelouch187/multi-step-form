import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { pageOneSelect, pageOneSave } from './pageOne-slice';
import { changeStep } from '../sidebar/side-slice';

type Inputs = {
  name: string;
  email: string;
  phone: number;
};

const FormOne: FC = () => {
  const pageOneInfo = useAppSelector(pageOneSelect)
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(pageOneSave(data))
    dispatch(changeStep(2))
  };

  return (
    <form className='form-page-one'
    onSubmit={handleSubmit(onSubmit)}>
      <label className='input__wrapper'>
        <p className='input__message'>
          <span className='input__title'>Name</span>
          {errors.name && <span className='input__error'>{errors.name.message}</span>}
        </p>
        <input defaultValue={pageOneInfo.name}
        className={errors.name?'input warning':'input'}
          type="text"
          placeholder="e.g. Stephen King"
          {...register('name', { required: 'This field is required' })}
        />
      </label>
      <label className='input__wrapper'>
        <p className='input__message'>
          <span className='input__title'>Email Address</span>
          {errors.email && <span className='input__error'>{errors.email.message}</span>}
          </p>
        <input defaultValue={pageOneInfo.email}
        className={errors.email?'input warning':'input'}
          type="email"
          placeholder="e.g. Stephenking@lorem.com"
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'email specified incorrectly',
            },
          })}
        />
      </label>
      <label className='input__wrapper'>
        <p className='input__message'>
          <span className='input__title'>Phone Number</span>
          {errors.phone && <span className='input__error'>{errors.phone.message}</span>}
        </p>
        <input defaultValue={pageOneInfo.phone||''}
        className={errors.phone?'input warning':'input'}
          type="phone"
          placeholder="e.g. +1 234 567 890"
          {...register('phone', { required: 'This field is required' })}
        />
      </label>
      <input value='Next step'
       className='button-next'
      type="submit" />
    </form>
  );
};
export default FormOne;
