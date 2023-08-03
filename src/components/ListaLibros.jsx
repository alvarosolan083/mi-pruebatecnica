import React from 'react';
import { useTable, useSortBy, useFilters } from 'react-table';
import { Link } from 'react-router-dom';

const ListaLibros = ({ libros }) => {
  const data = React.useMemo(() => libros, [libros]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nombre del Libro',
        accessor: 'name',
      },
      {
        Header: 'Ver detalles',
        accessor: 'url',
        Cell: ({ value }) => {
          const id = value.split('/').pop();
          return <Link to={`/libro/${id}`}>Ver detalles</Link>;
        }
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useFilters, useSortBy);

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' 🔽'
                      : ' 🔼'
                    : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListaLibros;
