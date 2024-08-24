import React from "react";
import { useTable } from "react-table";
import "../Styling/Table.css"

export function News(){

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
  };
    const [post,setPost] = React.useState([]);

    React.useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/pengumuman`)
        .then((res) => res.json())
        .then((post) => setPost(post.reverse()))
        .catch((e)=> console.error(`ada error : ${e}`))
    },[]);

    if(post.length>0){
        console.log(post);
    }

    const data = React.useMemo(()=>post,[post])

    const columns = React.useMemo(
        () => [
            {
                Header: "Judul",
                accessor: "title",
                Cell: ({ cell: { value } }) => (
                  <h2>
                    {value}
                  </h2>
                ),              
            },
            {
                Header: "Tanggal",
                accessor: "tanggal",
                Cell: ({cell: {value}}) => formatDate(value),
            },
            {
                Header: "Link",
                accessor: "isi",
                Cell: ({ cell: { value } }) => (
                  <a href={value} target="_blank" rel="noopener noreferrer">
                    <h2>KLIK SINI</h2>
                  </a>
                )
            }
        ],[]
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
}

export default News;