import TableRow from "./TableRow";

export default function TableOfColors({ colors }) {
  return (
    <div className="p-2">
      <table className="border border-collapse text-xs">
        <thead>
          <tr>
            <th>ID</th>
            <th>Spalva</th>
            <th>Hex</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {colors?.map((color) => (
            <TableRow
              id={color.id}
              color={color.color}
              colorHex={color.colorHex}
              date={color.date}
              key={color.id}
            />
          ))}
          {/* <TableRow
            id="2"
            color="rgb(132,22,64)"
            colorHex="#000000"
            date="2024-02-15 09:21"
          /> */}
        </tbody>
      </table>
    </div>
  );
}
