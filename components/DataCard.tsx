interface DataCardProps {
  title: string;
  size: string;
  lastUpdated: string;
}

export default function DataCard({ title, size, lastUpdated }: DataCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white">
      <h2 className="font-semibold">{title}</h2>
      <p className="text-gray-500">Size: {size}</p>
      <p className="text-gray-500">Last Updated: {lastUpdated}</p>
    </div>
  );
}