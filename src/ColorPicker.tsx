import { Palette } from 'node-vibrant/lib/color';

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

const ColorPicker = ({ palette }: { palette: Palette }) => {
  return (
    <form className="ColorPicker">
      {Object.entries(palette).map(
        ([key, value]) =>
          value !== undefined && (
            <label>
              <input type="checkbox" />
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
