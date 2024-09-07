import React, { useState } from 'react';
import Header from "../../../layouts/header";
import { Button, Switch, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box, Breadcrumbs, Link, Typography } from '@mui/material';
import MainDatatable from '../../../components/datatable/MainDatatable';
import { DeepSearchSpace } from '../../../utils/common-function';
import { DeleteSvg, EditSvg } from '../../../assets/svg';

const userData = [
    { sno: 14545, orderId: "ORD001", name: "John Doe", mobile: "+91-9989789865", Balance: "1000", invitecode: "KDH4560052", invitees: "Kunal", Myinvites: "42", Createat: "2023-01-01 10:00 AM", qty: 2, amount: "500", status: "Offline", active: true },
    { sno: 245454, orderId: "ORD002", name: "Jane Smith", mobile: "+91-9989789865", Balance: "1000", invitecode: "KDH4560052", invitees: "Kunal", Myinvites: "42", Createat: "2023-01-02 11:00 AM", qty: 1, amount: "300", status: "Offline", active: false },
    { sno: 345545, orderId: "ORD003", name: "Sam Johnson", mobile: "+91-9989789865", Balance: "1000", invitecode: "KDH4560052", invitees: "Kunal", Myinvites: "42", Createat: "2023-01-03 12:00 PM", qty: 4, amount: "1000", status: "Offline", active: true },
    { sno: 445545, orderId: "ORD004", name: "Alice Brown", mobile: "+91-9989789865", Balance: "1000", invitecode: "KDH4560052", invitees: "Kunal", Myinvites: "42", Createat: "2023-01-04 01:00 PM", qty: 3, amount: "750", status: "Offline", active: false },
    { sno: 57478, orderId: "ORD005", name: "Bob Davis", mobile: "+91-9989789865", Balance: "1000", invitecode: "KDH4560052", invitees: "Kunal", Myinvites: "42", Createat: "2023-01-05 02:00 PM", qty: 5, amount: "1250", status: "Offline", active: true },
];

const UpdateCustomerModal = ({ open, handleClose, initialData }) => {
    const [customerName, setCustomerName] = useState(initialData?.name || '');
    const [mobile, setMobile] = useState(initialData?.mobile || '');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSave = () => {
        // Logic to save the updated customer details
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Update Customer</DialogTitle>
            <DialogContent>
                <TextField
                    label="Customer name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSave} color="primary" variant="contained">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const UpdateBalanceModal = ({ open, handleClose, initialData }) => {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('Receive'); // Default type

    const handleSave = () => {
        // Logic to update the balance
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Update Balance</DialogTitle>
            <DialogContent>
                <TextField
                    label="Username"
                    value={initialData?.name}
                    fullWidth
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    label="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Type"
                    select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    fullWidth
                    margin="normal"
                    SelectProps={{
                        native: true,
                    }}
                >
                    <option value="Receive">Receive</option>
                    <option value="Send">Send</option>
                </TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSave} color="primary" variant="contained">
                    Update
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const Ourcustomer = () => {
    const [data, setData] = useState(userData);
    const [searchText, setSearchText] = useState('');
    const [customerModalOpen, setCustomerModalOpen] = useState(false);
    const [balanceModalOpen, setBalanceModalOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const handleToggle = (sno) => {
        const updatedData = data.map(item =>
            item.sno === sno ? { ...item, active: !item.active } : item
        );
        setData(updatedData);
    };

    const handleOpenCustomerModal = (user) => {
        setCurrentUser(user);
        setCustomerModalOpen(true);
    };

    const handleCloseCustomerModal = () => {
        setCustomerModalOpen(false);
        setCurrentUser(null);
    };

    const handleOpenBalanceModal = (user) => {
        setCurrentUser(user);
        setBalanceModalOpen(true);
    };

    const handleCloseBalanceModal = () => {
        setBalanceModalOpen(false);
        setCurrentUser(null);
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const filteredData = DeepSearchSpace(data, searchText);

    const columns = [
        { name: 'ID.', selector: row => row.orderId },
        { name: 'Name', selector: row => row.name },
        { name: 'Mobile', selector: row => row.mobile },
        { name: 'Balance', selector: row => row.Balance },
        { name: 'Invite code', selector: row => row.invitecode },
        { name: 'Invite By', selector: row => row.invitees },
        { name: 'My Invites', selector: row => row.Myinvites },
        { name: 'Status', selector: row => row.status },
        {
            name: 'Active',
            cell: row => (
                <Switch
                    checked={row.active}
                    onChange={() => handleToggle(row.sno)}
                    color="primary"
                />
            ),
        },
        {
            name: 'Balance',
            cell: row => (
                <Button variant="contained" color="primary" size="small" onClick={() => handleOpenBalanceModal(row)}>
                    Update
                </Button>
            ),
        },
        { name: 'Create At', selector: row => row.Createat },
        {
            name: 'Action',
            cell: row => (
                <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                    <div style={{ backgroundColor: "#ffb000", borderRadius: "50%", height: "30px", width: "30px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", cursor: 'pointer' }} onClick={() => handleOpenCustomerModal(row)}>
                        <EditSvg />
                    </div>
                    <div style={{ backgroundColor: "#e10303", borderRadius: "50%", height: "30px", width: "30px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                        <DeleteSvg />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <>
            <Header />
            <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
               {/* Breadcrumbs */}
               <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Link underline="hover" color="inherit" href="/games">
                        Customer
                    </Link>
                    <Typography color="text.primary">Our Customer</Typography>
                </Breadcrumbs>
                <TextField
                    label="Search"
                    variant="outlined"
                    size="small"
                    value={searchText}
                    onChange={handleSearchChange}
                />
            </Box>
            <div style={{ padding: "20px" }}>
                <MainDatatable data={filteredData} columns={columns} />
            </div>
            {currentUser && (
                <UpdateCustomerModal
                    open={customerModalOpen}
                    handleClose={handleCloseCustomerModal}
                    initialData={currentUser}
                />
            )}
            {currentUser && (
                <UpdateBalanceModal
                    open={balanceModalOpen}
                    handleClose={handleCloseBalanceModal}
                    initialData={currentUser}
                />
            )}
        </>
    );
};

export default Ourcustomer;
