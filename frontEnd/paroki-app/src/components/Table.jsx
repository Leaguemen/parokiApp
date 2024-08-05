import React from "react";
import { useTable } from "react-table";
import "../Styling/Table.css"

// const calculateAge = (birthdate) => {
//     const birthDate = new Date(birthdate);
//     const today = new Date();
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDifference = today.getMonth() - birthDate.getMonth();
//     if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
//     return age;
//   };


export function Table(){
    const [umat, setUmat] = React.useState([]);
    const [query,setQuery] = React.useState([]);

    React.useEffect(()=>{
        fetch("/publicUmat")
        .then((res) => res.json())
        .then((umat) => setUmat(umat))
    },[])

    if(umat.length>0){
        console.log(umat);
    }

    const data = React.useMemo(()=>umat,[umat])

    const columns = React.useMemo(
        () => [
            {
                Header: "No",
                accessor: "nomor"
            },
            {
                Header: "Nama",
                accessor: "nama",
                Cell: ({ value }) => <div className="nameColumn">{value}</div>
            },            {
                Header: "Lingkungan",
                accessor: "lingkungan"
            },            {
                Header: "Grup",
                accessor: "grup"
            },            {
                Header: "Bus",
                accessor: "bus"
            }
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

    return(
        <>
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="dataOrang"> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
        </>
    )
};

export default Table;