import { useState, useEffect, useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { fetchData } from "../../../utils/enquiry";
import CircularProgress from "@mui/material/CircularProgress";
import { IoClose } from "react-icons/io5";
import { enquiryData } from "../../../Constants/adminData";

const columns = [
  { id: "si", label: "#", minWidth: 10, align: "center" },
  { id: "name", label: "Name", minWidth: 170, align: "center" },
  { id: "subject", label: "Subject", minWidth: 100, align: "center" },
  {
    id: "email",
    label: "email",
    minWidth: 170,
    align: "center",
  },
  {
    id: "phone",
    label: "Phone",
    minWidth: 170,
    align: "center",
  },
  {
    id: "message",
    label: "Message",
    minWidth: 170,
    align: "center",
  },
];

export default function Enquiry() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");
  const [total, setTotal] = useState("");
  const [search,setSearch]=useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    fetchData(page, rowsPerPage).then((response) => {
      setData(response.data);
      setTotal(response.total);
      setLoading(false);
    });
  }, [page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSort = (columnId) => {
    const isAsc = orderBy === columnId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(columnId);
  };

  const handleSearch = (event) => {
    const trimmedValue = event.target.value.trim();
    setSearch(trimmedValue);
    const filteredData = enquiryData.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(trimmedValue.toLowerCase())
      )
    );
    setData(filteredData);
  };
  function resetSearch() {
    setSearch("");
    inputRef.current.value = "";
    handleSearch({ target: { value: "" } });
  }
  

  return (
    <div className="w-full h-full">
      <div className="w-full px-5 md:px-20 py-5 md:py-10">
        <h1 className="text-3xl font-medium">Enquiries</h1>
      </div>
      <div className="px-4 w-full h-full">
        <div className="flex justify-end my-2">
          <div className="rounded-md ring-2 bg-white flex items-center px-2">
            <input
              type="text"
              className="py-2 px-3 text-sm rounded-md text-black focus:outline-none"
              placeholder="Search..."
              ref={inputRef}
              onChange={handleSearch}
            />
            <button onClick={resetSearch} className={`cursor-pointer ${search ? "block" : "hidden"}`}>
              <IoClose size={20} color="gray"/>
            </button>
          </div>
        </div>
        <TableContainer component={Paper} className="w-full max-h-[500px]">
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    <TableSortLabel
                      active
                      direction={orderBy === column.id ? order : "desc"}
                      onClick={() => handleSort(column.id)}
                    >
                      {column.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={columns.length} align="center">
                    <CircularProgress />
                  </TableCell>
                </TableRow>
              ) : (
                data.map((row, index) => (
                  <TableRow
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-200/70" : ""}`}
                  >
                    {columns.map((column) => (
                      <TableCell key={column.id} align={column.align}>
                        {row[column.id]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={total} // Assume total count from API response
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className="bg-white"
        />
      </div>
    </div>
  );
}
