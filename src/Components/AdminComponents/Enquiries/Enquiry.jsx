import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import TableSortLabel from "@mui/material/TableSortLabel";
import { enquiryData } from "../../../Constants/adminData";

const columns = [
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
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [orderBy, setOrderBy] = useState("");
    const [order, setOrder] = useState("asc");
  
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
  
    const sortedData = enquiryData.sort((a, b) => {
      const firstValue = a[orderBy];
      const secondValue = b[orderBy];
      if (firstValue < secondValue) return order === "asc" ? -1 : 1;
      if (firstValue > secondValue) return order === "asc" ? 1 : -1;
      return 0;
    });
  
    return (
      <div className="w-full h-full">
        <div className="w-full px-5 md:px-20 py-5 md:py-10">
          <h1 className="text-3xl font-medium">Enquiries</h1>
        </div>
        <div className="px-4">
          <TableContainer sx={{ backgroundColor: "white" }}>
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
                {sortedData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={index} hover>
                      {columns.map((column) => (
                        <TableCell key={column.id} align={column.align}>
                          {row[column.id]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={enquiryData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
    );
  }