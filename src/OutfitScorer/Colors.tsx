import { useRecoilState } from 'recoil';
import { colorsState } from './atoms';

/**
 * Returns `array` with the element at `index` set to `value` without mutating `array`
 */
const changeElement = <T,>(array: T[], index: number, value: T) => {
  const newArray = [...array];
  newArray[index] = value;
  return newArray;
};

const Colors = () => {
  const [colors, setColors] = useRecoilState(colorsState);

  return (
    <div className="Colors">
      {colors.map((color, index) => (
        <input
          type="color"
          key={index}
          value={color}
          onChange={(event) =>
            setColors((colors) =>
              changeElement(colors, index, event.target.value)
            )
          }
        />
      ))}
      <button onClick={() => setColors((colors) => [...colors, '#ffffff'])}>
        Add
      </button>
    </div>
  );
};

export default Colors;
