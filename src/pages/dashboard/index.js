import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LineChart } from '@mui/x-charts/LineChart';
import Header from "../../layouts/header";
import { Color } from "../../assets/color";
import { DeleteSvg } from "../../assets/svg";
import DatatableHeading from "../../components/heading/DatatableHeading";
import MainDatatable from "../../components/datatable/MainDatatable";
import { DeepSearchSpace } from "../../utils/common-function";
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

export default function Dashboard() {
  const navigate = useNavigate();

  const userData = [
    { sno: 1, orderId: "ORD001", name: "John Doe", address: "123 Main St", dateTime: "2023-01-01 10:00 AM", qty: 2, amount: "500", status: "Pending" },
    { sno: 2, orderId: "ORD002", name: "Jane Smith", address: "456 Elm St", dateTime: "2023-01-02 11:00 AM", qty: 1, amount: "300", status: "Completed" },
    { sno: 3, orderId: "ORD003", name: "Sam Johnson", address: "789 Oak St", dateTime: "2023-01-03 12:00 PM", qty: 4, amount: "1000", status: "Pending" },
    { sno: 4, orderId: "ORD004", name: "Alice Brown", address: "101 Pine St", dateTime: "2023-01-04 01:00 PM", qty: 3, amount: "750", status: "Completed" },
    { sno: 5, orderId: "ORD005", name: "Bob Davis", address: "202 Maple St", dateTime: "2023-01-05 02:00 PM", qty: 5, amount: "1250", status: "Pending" },
  ];

  const [searchText, setSearchText] = useState('');
  const filteredData = DeepSearchSpace(userData, searchText);

  const columns = [
    { name: 'S.No.', selector: row => filteredData?.indexOf(row) + 1 },
    { name: 'Order Id', selector: row => row.orderId },
    { name: 'Name', selector: row => row.name },
    { name: 'Address', selector: row => row.address },
    { name: 'Date - Time', selector: row => row.dateTime },
    { name: 'QTY.', selector: row => row.qty },
    { name: 'Amount', selector: row => row.amount },
    { name: 'Status', selector: row => row.status },
    {
      name: 'Action',
      cell: row => (
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <div style={{ backgroundColor: "#ffb000", borderRadius: "50%", height: "30px", width: "30px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}><DeleteSvg /></div>
        </div>
      ),
    },
  ];

  // const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  // const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  // const xLabels = [
  //   'Page A',
  //   'Page B',
  //   'Page C',
  //   'Page D',
  //   'Page E',
  //   'Page F',
  //   'Page G',
  // ];
  // const [date, setDate] = useState(new Date());
  // const [events, setEvents] = useState({
  //   '2024-06-20': ['Event 1', 'Event 2'],
  //   '2024-06-21': ['Event 3', 'Event 4'],
  //   '2024-06-22': ['Event 5'],
  //   // Add more dates and events as needed
  // });

  // // Function to handle date change
  // const onChange = (newDate) => {
  //   setDate(newDate);
  // };

  // // Function to log clicked date's data
  // const handleClickDate = (clickedDate) => {
  //   if (events[clickedDate]) {
  //     console.log(`Events for ${clickedDate}:`, events[clickedDate]);
  //   } else {
  //     console.log(`No events for ${clickedDate}`);
  //   }
  // };

  return (
    <>
      <Header />

      <div style={{ padding: "20px", backgroundColor: '#fff8ef' }}>
        <div style={{ padding: "3px 5px 10px 5px" }}>
          <div style={{ fontWeight: "600", fontSize: "25px" }}>Dashboard</div>
        </div>

        <Grid container spacing={2}>
          <Grid item lg={4} sm={12} md={12} xs={12}>
            <div className="TopCard" style={{ padding: "20px", borderRadius: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ fontSize: "15px", color: Color.white }}>Today Biding Amount</div>
                  <div style={{ fontSize: "25px", fontWeight: "600" }}>40,689</div>
                </div>
                <img src={require("../../assets/images/icon1.png")} style={{ height: "40px", width: "40px" }} />
              </div>
            </div>
          </Grid>

          <Grid item lg={4} sm={12} md={12} xs={12}>
            <div className="TopCard" style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ fontSize: "15px", color: Color.white }}>Today Winning Amount</div>
                  <div style={{ fontSize: "25px", fontWeight: "600" }}>40,689</div>
                </div>
                <img src={require("../../assets/images/Icon2.png")} style={{ height: "40px", width: "40px" }} />
              </div>
            </div>
          </Grid>

          <Grid item lg={4} sm={12} md={12} xs={12}>
            <div className="TopCard" style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ fontSize: "15px", color: Color.white }}>Total Customers</div>
                  <div style={{ fontSize: "25px", fontWeight: "600" }}>40,689</div>
                </div>
                <img src={require("../../assets/images/Icon3.png")} style={{ height: "40px", width: "40px" }} />
              </div>
            </div>
          </Grid>

          <Grid item lg={4} sm={12} md={12} xs={12}>
            <div className="TopCard" style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ fontSize: "15px", color: Color.white }}>Active Customers</div>
                  <div style={{ fontSize: "25px", fontWeight: "600" }}>40,689</div>
                </div>
                <img src={require("../../assets/images/Icon4.png")} style={{ height: "40px", width: "40px" }} />
              </div>
            </div>
          </Grid>

          <Grid item lg={4} sm={12} md={12} xs={12}>
            <div className="TopCard" style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ fontSize: "15px", color: Color.white }}>Today Deposit</div>
                  <div style={{ fontSize: "25px", fontWeight: "600" }}>40,689</div>
                </div>
                <img src={require("../../assets/images/Icon4.png")} style={{ height: "40px", width: "40px" }} />
              </div>
            </div>
          </Grid>

          <Grid item lg={4} sm={12} md={12} xs={12}>
            <div className="TopCard" style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ fontSize: "15px", color: Color.white }}>Today Withdraw</div>
                  <div style={{ fontSize: "25px", fontWeight: "600" }}>40,689</div>
                </div>
                <img src={require("../../assets/images/Icon4.png")} style={{ height: "40px", width: "40px" }} />
              </div>
            </div>
          </Grid>

          {/* <Grid item lg={12} sm={12} md={12} xs={12}>
            <div className="dash_cards" style={{ backgroundColor: "#fff", borderRadius: "10px", display: "flex", justifyContent: "center" }}>
              <LineChart
                width={900}
                height={300}
                series={[
                  { data: pData, label: "pv" },
                  { data: uData, label: "uv" },
                ]}
                xAxis={[{ scaleType: "point", data: xLabels }]}
              />
            </div>
          </Grid> */}

          <Grid item lg={12} sm={12} md={12} xs={12}>
            <div style={{ padding: "20px", backgroundColor: "#fff", marginBottom: "20px", borderRadius: "10px" }}>
              <DatatableHeading title={'Order Details'} data={userData} />
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", backgroundColor: "#fff" }}>
                <input type='date' onChange={(e) => console.log(e.target.value)} placeholder='Search your data...' style={{ padding: '5px 10px', borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '250px', fontSize: '15px', outline: 'none', }} />
                <input type='search' value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder='Search your data...' style={{ padding: '5px 10px', borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '250px', fontSize: '15px', outline: 'none', }} />
              </div>
              <MainDatatable data={filteredData} columns={columns} />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
