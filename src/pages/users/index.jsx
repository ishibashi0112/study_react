import Head from 'next/head';
import { Header } from 'src/components/Header';
import {UsersComponent} from "src/components/users"

const  Users = () =>{
  return (
    <div>
      <Head>
        <title>Users page</title>
      </Head>
      <Header />
      <UsersComponent /> 
    </div>
  )
}

export default Users;