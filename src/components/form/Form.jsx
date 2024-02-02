import React from 'react'
import styles from './Form.module.scss'
import { useForm } from 'react-hook-form'

const Form = ({ title }) => {

  // handleSubmit을 통해 input tyle 함수 할당 
  // register을 통해 valied 할 값 저장 
  const { register, handleSubmit, formState: { errors }, reset
  } = useForm(
    {mode: 'onChange'}
  )

  const onSubmit = ({ email, password }) => {
    console.log(email)
    console.log(password)
  }

  const userEmail = {
    required: "필드 필드입니다."

  }

  const userPassword = {
    required: "필드 필드입니다.",
    minLength: {
      value: 4,
      message: "최소 4자 이상 입니다."
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <input 
          type='email'
          placeholder='E-mail'
          {...register('email', userEmail)}
        />
        {/* errors에 있으면  */}
        {errors?.email &&
          <div>
            <span className={styles.form_error}>
              {errors.email.message}
            </span>
          </div>
        }
        <div>
          <span className={styles.form_error}></span>
        </div>
      </div>
      <div>
        <input 
          type='password'
          placeholder='password'
          {...register('password', userPassword)}
        />
        {/* errors에 있으면  */}
        {errors?.password &&
          <div>
            <span className={styles.form_error}>
              {errors.password.message}
            </span>
          </div>
        }
        <div>
          <span className={styles.form_error}></span>
        </div>
      </div>
      <button type='submit'>{title}</button>
      <span className={styles.form_error}></span>
    </form>
  )
}

export default Form