import React, { useImperativeHandle } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { forwardRef } from 'react';
import 'keen-slider/keen-slider.min.css'

// Componentes hijos:
const Slide = (props) => {

  const { children } = props;

  return (
    <div className='keen-slider__slide'>
      {children}
    </div>);
}

// Componente padre:
const ForwardedSlider = (props, ref) => {

  const { children, options } = props;

  const [refCallback, slider] = useKeenSlider(options);

  //Aqui usamos el hook: useImperativeHandle:
  useImperativeHandle(ref, () => {
    return {
      next: slider.current.next,
      prev: slider.current.prev
    }
  }
  );

  return (
    <div ref={refCallback} className='keen-slider'>
      {children}
    </div>
  );
}

const Slider = forwardRef(ForwardedSlider);

export { Slider, Slide };

