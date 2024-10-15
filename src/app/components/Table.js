import * as React from 'react';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Table as BTable } from 'react-bootstrap';
import '@/style/components/Table.css';

function Table(props) {
  const { 
    data, 
    columns,
    handleRowClick = null
  } = props;

  // Configuration de la table
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <BTable striped hover className=''>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
                {header.column.getCanSort() ? (
                  <span>
                    {header.column.getIsSorted()
                      ? header.column.getIsSortedDesc()
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                ) : null}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr 
            key={row.id}
            onClick={props.handleRowClick ? () => handleRowClick(row) : undefined}
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </BTable>
  );
}

export { Table };
