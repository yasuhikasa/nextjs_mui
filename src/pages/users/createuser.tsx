import React ,{ useState, ChangeEvent, FormEvent } from 'react';
import Layout from '../components/layout';
import { Box ,Grid, TextField, Typography } from '@mui/material';
import FirstButton from '../components/button';
import { createUser } from '../api/user';
import styles from '../../styles/components/createUser.module.css';
import { User } from '../types/user';


const CreateUser: React.FC = () => {
  const [users, setUsers] = useState<User>({
    id: 0,
    firstName: '',
    lastName: '',
    firstNameKana: '',
    lastNameKana: '',
    email: '',
    tel: '',
    memo: '',
  });


const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = event.target;
  setUsers((prevData) => ({ ...prevData, [name]: value }));
}

const handlePost = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
    try {
      const response = await createUser(users);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
}

  return (
    <>
      <Layout pageTitle='ユーザー登録'>
        <form onSubmit={handlePost}>
        <Box sx={{width:'98%'}}>
          <Grid container spacing={2} className={styles.container}>
            <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box className={styles.input}>
                  <Typography>姓</Typography>
                  <TextField
                    id="outlined-basic"
                    label="姓"
                    variant="outlined"
                    size="small"
                    name="lastName"
                    value={users.lastName}
                    onChange={handleInputChange}
                    className={styles.name} />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className={styles.input}>
                  <Typography>名</Typography>
                  <TextField
                    id="outlined-basic"
                    label="名"
                    variant="outlined"
                    name="firstName"
                    value={users.firstName}
                    onChange={handleInputChange}
                    size="small"
                    className={styles.name} />
                </Box>
              </Grid>
              </Grid>
              <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box className={styles.input}>
                  <Typography>セイ</Typography>
                  <TextField
                    id="outlined-basic"
                    label="セイ"
                    variant="outlined"
                    size="small"
                    name="firstNameKana"
                    value={users.firstNameKana}
                    onChange={handleInputChange}
                    className={styles.name} />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className={styles.input}>
                  <Typography>メイ</Typography>
                  <TextField
                    id="outlined-basic"
                    label="メイ"
                    variant="outlined"
                    size="small"
                    name="lastNameKana"
                    value={users.lastNameKana}
                    onChange={handleInputChange}
                    className={styles.name} />
                </Box>
              </Grid>
              </Grid>
              <Box className={styles.input}>
                  <Typography>メールアドレス</Typography>
                  <TextField
                    id="outlined-basic"
                    label="メールアドレス"
                    variant="outlined"
                    size="small"
                    name="email"
                    value={users.email}
                    onChange={handleInputChange}
                    className={styles.mail} />
              </Box>
              <Box className={styles.input}>
                  <Typography>電話番号</Typography>
                  <TextField
                    id="outlined-basic"
                    label="電話番号"
                    variant="outlined"
                    size="small"
                    name="tel"
                    value={users.tel}
                    onChange={handleInputChange}
                    className={styles.name} />
              </Box>
            </Grid>



            <Grid item xs={6}>
              <Box>
              <Typography>備考</Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="備考"
                    multiline
                    rows={4}
                    variant="outlined"
                    name="memo"
                    value={users.memo}
                    onChange={handleInputChange}
                    className={styles.name}
                  />
              </Box>
            </Grid>
            <Grid item xs={12}>
                <Box className={styles.submit}>
                  <FirstButton type="submit" />
                </Box>
              </Grid>
            </Grid>

        </Box>
        </form>
      </Layout>
    </>
  );
}

export default CreateUser;

