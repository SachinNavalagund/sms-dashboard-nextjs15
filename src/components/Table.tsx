interface Props {
  columns: {
    header: string;
    accessor: string;
    className?: string | null | undefined;
  }[];
}

const Table = ({ columns }: Props) => {
  return (
    <table className="mt-4 w-full">
      <thead>
        <tr className="text-left text-sm text-gray-500">
          {columns.map((col) => (
            <th key={col.accessor}>{col.header}</th>
          ))}
        </tr>
      </thead>
    </table>
  );
};

export default Table;
