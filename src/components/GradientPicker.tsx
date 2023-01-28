import { useEffect, useState } from 'react';
import { BlockPicker } from 'react-color';

type ComponentProps = {
  display: boolean;
};
type HandleProps = {
  hex: string;
};

export const GradientPicker = ({ display }: ComponentProps) => {
  const [color, setColor] = useState<string>('#c067c8');

  const [colors, setColors] = useState<any>([
    '#c067c8',
    '#453985',
    '#3a4ac6',
    '#185eea',
    '#3e2a7e',
    '#6780d1',
    '#7f2db6',
  ]);

  // const hexToGradient = (hex: string) => {
  //   switch (hex) {
  //     case "value":

  //       break;

  //     default:
  //       break;
  //   }
  // }
  useEffect(() => {
    console.log(color);
    if (color === '#453985') {
      document
        .querySelector('#root')
        ?.setAttribute(
          'style',
          'background: conic-gradient(at right bottom,rgb(16, 118, 69),rgb(63, 3, 124))'
        );
    } else if (color === '#c067c8') {
      document
        .querySelector('#root')
        ?.setAttribute(
          'style',
          'background: linear-gradient(-206deg, #835EFF 0%, #f844a7 100%)'
        );
    } else if (color === '#3a4ac6') {
      document
        .querySelector('#root')
        ?.setAttribute(
          'style',
          'background: conic-gradient(at right bottom, rgb(75, 81, 84), rgb(75, 85, 99), rgb(24, 51, 140))'
        );
    } else if (color === '#185eea') {
      document
        .querySelector('#root')
        ?.setAttribute(
          'style',
          'background: conic-gradient(at right top, rgb(16, 118, 69), rgb(59, 130, 246), rgb(97, 17, 169))'
        );
    } else if (color === '#3e2a7e') {
      document
        .querySelector('#root')
        ?.setAttribute(
          'style',
          'background: conic-gradient(at right bottom, rgb(50, 54, 57), rgb(63, 3, 124))'
        );
    } else if (color === '#6780d1') {
      document
        .querySelector('#root')
        ?.setAttribute(
          'style',
          'background: conic-gradient(at right bottom, rgb(134, 7, 7), rgb(209, 213, 219), rgb(8, 68, 166))'
        );
    } else if (color === '#7f2db6') {
      document
        .querySelector('#root')
        ?.setAttribute(
          'style',
          'background: conic-gradient(at right bottom, rgb(36, 39, 40), rgb(192, 132, 252), rgb(86, 26, 134))'
        );
    }
  }, [color]);

  const handleChange = (e: HandleProps) => {
    if (colors.includes(e.hex)) {
      if (!(colors[0] === e.hex)) {
        // remove and put at first index
        let newColorArray = colors;
        const indexOfObject = newColorArray.findIndex(
          (color: string) => {
            return color === e.hex;
          }
        );
        newColorArray.splice(indexOfObject, 1);
        newColorArray = [e.hex, ...newColorArray];
        setColors(newColorArray);
        setColor(e.hex);
      } else {
        // do nothing
      }
    } else {
      setColors([e.hex, ...colors]);
      setColor(e.hex);
    }
    console.log(e);
  };

  return (
    <div>
      {display ? (
        <div className="fixed right-10 bottom-24 flex justify-between  bg-gradient-to-b bg-opacity-50 ">
          <BlockPicker
            styles={{
              default: {
                input: {
                  display: 'none',
                },
                label: {
                  display: 'none',
                },
              },
            }}
            color={color}
            colors={colors}
            width="200px"
            triangle="hide"
            onChange={handleChange}
          />
        </div>
      ) : null}
    </div>
  );
};
