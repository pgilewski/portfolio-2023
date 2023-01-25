import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

interface CalculatorProps {}

interface CalculatorData {
  checkbox1: boolean;
  checkbox2: boolean;
  checkbox3: boolean;
  checkbox4: boolean;
  slider: number;
}

export const Calculator: React.FC<CalculatorProps> = () => {
  const [result, setResult] = useState<null | number>(0);
  // const { register, handleSubmit } = useForm<CalculatorData>();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CalculatorData>();
  // const onSubmit = data => console.log(data);

  const checkbox1Ref = useRef<HTMLInputElement>(null);
  const checkbox2Ref = useRef<HTMLInputElement>(null);
  const checkbox3Ref = useRef<HTMLInputElement>(null);
  const sliderRef = useRef<HTMLInputElement>(null);

  const [days, setDays] = useState<number>(15);

  const onSubmit = (data: CalculatorData) => {
    let multiplier = 1;
    console.log(data);
    if (data.checkbox1) multiplier += 1;
    if (data.checkbox2) multiplier += 1.2;
    if (data.checkbox3) multiplier += 1.4;
    if (data.checkbox4) multiplier += 2;
    multiplier = multiplier * 5 * 40;
    const res = multiplier * days;
    setResult(res);
    console.log(res);
  };

  return (
    <div className="bg-white/10 shadow-lg rounded-xl shadow-strong m-auto justify-left items-center center md:max-w-screen-md w-full bg-navyDark mt-6 font-mono text-md p-8">
      <div className="text-xl mb-4 text-center font-semibold">Calculator</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="flex">
          <input
            type="checkbox"
            {...register('checkbox1', { required: 'To pole jest wymagane!' })}
            aria-invalid={errors.checkbox1 ? 'true' : 'false'}
            className="mr-1"
          />
          Podstawowa strona dla biznesu
          <span className="text-red-400 ml-auto">
            {errors.checkbox1?.message}
          </span>
        </label>
        <label>
          <input type="checkbox" {...register('checkbox2')} className="mr-1" />
          Stworzenie wspólnie designu aplikacji
        </label>
        <br />
        <label>
          <input type="checkbox" {...register('checkbox3')} className="mr-1" />
          Zestawienie z bazą danych / umozliwienie edycji treści
        </label>
        <br />
        <label>
          <input type="checkbox" {...register('checkbox4')} className="mr-1" />
          Dodatkowy developer
        </label>
        <br />
        <div className="pt-4">
          Czas pracy<span className=" text-xs align-text-top">*</span>
          :
          <input
            type="range"
            name="slider"
            min={15}
            max={100}
            ref={sliderRef}
            className="w-full "
            onChange={(event) => setDays(parseInt(event.target.value))}
          />
        </div>
        <div className="justify-between flex">
          <div>Min: 15 dni </div>
          <div>{days}</div>
          <div>Max: 100 dni </div>
        </div>
        <br />
        <div className="flex justify-center">
          <button
            className="border px-2 py-1 hover:bg-white/50 transition focus:bg-white/50"
            type="submit"
          >
            Calculate
          </button>
          <br />
        </div>
        <div className="flex justify-center py-4">
          {result !== 0 && <label>Result: {result}</label>}
        </div>
      </form>
    </div>
  );
};
