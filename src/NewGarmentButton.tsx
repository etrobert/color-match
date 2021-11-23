import classNames from 'classnames';
import { useRef } from 'react';
import FeatherIcon from './FeatherIcon';

import './NewGarmentButton.css';

type Props = {
  className?: string;
};

const NewGarmentButton = ({ className }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={ref}
        style={{ display: 'none' }}
      />
      <button
        onClick={() => ref.current?.click()}
        className={classNames('NewGarmentButton', className)}
      >
        <FeatherIcon
          name="plus"
          options={{ width: '2.5rem', height: '2.5rem' }}
        />
      </button>
    </>
  );
};

export default NewGarmentButton;
