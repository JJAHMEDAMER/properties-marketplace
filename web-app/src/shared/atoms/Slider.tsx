import React from "react";

export function Slider({
  minMaxValue,
  onValueChange,
  minimum = 0,
  maximum = 100,
}: {
  minMaxValue: [number, number];
  onValueChange: (value: [number, number]) => void;
  minimum?: number;
  maximum?: number;
}) {
  const min = minMaxValue[0];
  const max = minMaxValue[1];

  const normalize = (val: number) =>
    Math.round(((val - minimum) / (maximum - minimum)) * 100);

  const denormalize = (val: number) =>
    Math.round((val / 100) * (maximum - minimum) + minimum);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.min(denormalize(Number(e.target.value)), max - 1000);
    onValueChange([newMin, max || maximum]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.max(denormalize(Number(e.target.value)), min + 1000);
    onValueChange([min || minimum, newMax]);
  };

  function formatNumber(value: number) {
    if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `${(value / 1_000).toFixed(0)}K`;
    return value.toString();
  }

  return (
    <div className="w-full p-4 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-300 dark:border-zinc-700">
      <div className="text-center text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-4">
        Selected Range:{" "}
        <span className="font-bold text-zinc-900 dark:text-white">
          {formatNumber(min)} - {formatNumber(max)}
        </span>
      </div>

      <div className="relative flex flex-col gap-4">
        <input
          type="range"
          min={0}
          max={100}
          value={normalize(min)}
          onChange={handleMinChange}
          className="w-full h-2 bg-zinc-300 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-zinc-800"
        />
        <input
          type="range"
          min={0}
          max={100}
          value={normalize(max)}
          onChange={handleMaxChange}
          className="w-full h-2 bg-zinc-300 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-zinc-800"
        />
      </div>
    </div>
  );
}
