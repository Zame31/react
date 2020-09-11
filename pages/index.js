import * as master from '../components/master/import';

export default function Home() {

  master.React.useEffect(() => { 
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token')) {
      master.Router.push('/home','/');
    }
    else{
      master.Router.push('/login');
    }
  })

  

  return (
    <>
    </>
  )
}