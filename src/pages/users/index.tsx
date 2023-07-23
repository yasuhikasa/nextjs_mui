import React, { useState, useEffect } from 'react';
import { Box, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Select, SelectChangeEvent, MenuItem, InputLabel, FormControl, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { User } from '../types/user';
import { getUsers, deleteUsers } from '../api/user';
import styles from '../../styles/components/createUser.module.css';
import Layout from '../components/layout';

const UsersIndex: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selected, setSelected] = useState<number[]>([]); // 保存選択されたUser IDs
  const [menu, setMenu] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response);
        } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = users.map((user) => user.id).filter((id): id is number => id !== undefined);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleMenuChange = (event: SelectChangeEvent<string>) => {
    setMenu(event.target.value);
    if (event.target.value === '10') {
      setOpen(true);
    }
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleConfirmDelete = async () => {
    await deleteUsers(selected);
    setUsers(users.filter((user) => !selected.includes(user.id!)));
    setOpen(false);
  };

  return (
    <Layout pageTitle='ユーザー一覧'>
    <Box sx={{width:'96.5%'}}>
    <FormControl>
      <InputLabel id="demo-simple-select-label">操作を選択してください</InputLabel>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={menu}
          label="menu"
          onChange={handleMenuChange}
>
  <MenuItem value={"10"}>削除</MenuItem>
  <MenuItem value={"20"}>メール送信</MenuItem>
</Select>
      </FormControl>
    <TableContainer component={Box} className={styles.container}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
          <TableCell padding="checkbox">
              <Checkbox
                indeterminate={selected.length > 0 && selected.length < users.length}
                checked={users.length > 0 && selected.length === users.length}
                onChange={handleSelectAllClick}
              />
            </TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>First Name (Kana)</TableCell>
            <TableCell>Last Name (Kana)</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Telephone</TableCell>
            <TableCell>Memo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
            key={user.id}
            selected={selected.indexOf(user.id!) !== -1}
          >
            <TableCell padding="checkbox">
              <Checkbox
                checked={selected.indexOf(user.id!) !== -1}
                onChange={() => handleClick(user.id!)}
              />
            </TableCell>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.firstNameKana}</TableCell>
              <TableCell>{user.lastNameKana}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.tel}</TableCell>
              <TableCell>{user.memo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    <Dialog
      open={open}
      onClose={handleDialogClose}
    >
      <DialogTitle>
        {"削除確認"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          削除してもいいですか？
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose}>
          キャンセル
        </Button>
        <Button onClick={handleConfirmDelete} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
    </Layout>
  );
};

export default UsersIndex;

