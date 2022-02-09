import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useEffect, useState} from 'react'
import { Alert, Button, Card, Spinner } from 'react-bootstrap';
import axios from 'axios';


function App() {
  const [data, setData] = useState();
  const [error, seterror] = useState();
  useEffect(() => {

    //first method
    // fetch('https://jsonplaceholder.typicode.com/comments')
    // .then(res=>res.json())
    // .then(res=>setData(res))
    // .catch(error=>seterror(error))

    //second method
    // axios.get('https://jsonplaceholder.typicode.com/comments')
    // .then(res=>setData(res.data))
    // .catch(error=>seterror(error))

    //third method 
    const fetchData=async()=>{
      try {
        const {data}=await axios.get('https://jsonplaceholder.typicode.com/comments')
        setData(data)
      } catch (error) {
        seterror(error)
      }
    }
    fetchData()
  }, []);
  console.log(data);
  return (
    <div className="App" style={{display:'flex',flexWrap:'wrap'}} >
      {error &&   <Alert  variant='danger'> failed to fetch data </Alert>}
      {data ?  
      data.map(el =>
                <Card  style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title> {el.name} </Card.Title>
                    <Card.Text>
                      {el.email}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>)
                :   <Spinner style={{margin:'auto'}} animation="border" variant="primary" />              }
    </div>
  );
}

export default App;
