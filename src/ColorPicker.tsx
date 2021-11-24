import { Palette, Swatch } from 'node-vibrant/lib/color';
import { useState } from 'react';
import without from 'lodash/without';

import './ColorPicker.css';

const ColorComponent = ({ color }: { color: string }) => (
  <div
    style={{
      width: '100%',
      height: 200,
      backgroundColor: color,
    }}
  />
);

type Props = {
  palette: Palette;
  onSubmit: (colors: Swatch[]) => void;
};

const ColorPicker = ({ palette, onSubmit }: Props) => {
  const [selected, setSelected] = useState<Swatch[]>([]);

  return (
    <form
      className="ColorPicker"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(selected);
      }}
    >
      {Object.entries(palette).map(
        ([key, value]) =>
          value !== undefined && (
            <label>
              <input
                type="checkbox"
                onChange={(event) => {
                  const { checked } = event.target;
                  setSelected((selected) =>
                    checked ? [...selected, value] : without(selected, value)
                  );
                }}
              />
              {key}
              <ColorComponent color={value.getHex()} />
            </label>
          )
      )}
      <button type="submit">Confirm</button>
    </form>
  );
};

export default ColorPicker;
