interface TooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string | number;
}

export function CustomTooltip({ active, payload, label }: TooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border rounded-lg shadow-lg">
        <p className="font-bold mb-2 text-gray-800">
          {typeof label === 'number' ? `Month ${label}` : label}
        </p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }} className="text-sm py-1 font-medium">
            {entry.name}: ${entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
}