import { ThermometerPercentList } from 'components/PassionThermometer/types';

export function getTotalWidth(
  containerWidth: number,
  thermometerPercentList: ThermometerPercentList,
  indicatorWidth: number,
) {
  const totalPercent = getTotalPercent(thermometerPercentList);
  const onePercentWidth = containerWidth / Object.keys(thermometerPercentList).length / 20;
  return onePercentWidth * totalPercent - (indicatorWidth ?? 0);
}

export function getTotalPercent(thermometerPercentList: ThermometerPercentList) {
  const entries = Object.entries(thermometerPercentList);
  const totalPercent = entries.reduce((acc, cur) => {
    return acc + cur[1].percent;
  }, 0);

  return totalPercent;
}
