import classNames from 'classnames';
import { useRef } from 'react';

import './NewOutfitButton.css';

type Props = {
  className?: string;
  onDone: (imageData: string) => void;
};

const NewOutfitButton = ({ className, onDone }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={ref}
        style={{ display: 'none' }}
        onChange={(event) => {
          const files = event.target.files;
          if (files === null) return;
          const reader = new FileReader();
          reader.onload = (event) => {
            const result = event.target?.result;
            if (typeof result !== 'string') return;
            onDone(result);
          };
          reader.readAsDataURL(files[0]);
        }}
      />
      <button
        onClick={() => ref.current?.click()}
        className={classNames('NewOutfitButton', className)}
      >
        Show us your outfit!
      </button>
    </>
  );
};

export default NewOutfitButton;
