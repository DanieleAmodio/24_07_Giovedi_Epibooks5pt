
import { Col, } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useSelected } from '../context/selectedContext';

function SingleBook({book, colorText, theme}){
 const {selected,setSelected}= useSelected ()




    return (
      
     <Col  sm={6} md={6} lg={4} xl={3} xxl={3} className='my-4'>
             <Card className={'h-100 ' + (selected==book.asin && 'border  border-3 border-danger') }>
             <Card.Img  onClick={()=> setSelected(oldAsin=>book.asin== oldAsin ? '': book.asin ) } variant="top" src={book.img} style={{ height:'300px', width:'100%', objectFit:'cover'}}/>
             <Card.Body style={{background: theme} }>
             <Card.Title style={{ color: colorText}} >{book.title}</Card.Title>
             <Card.Text style={{ color: colorText}} >
             Price: {book.price}
             </Card.Text>
             </Card.Body>
             </Card>
           </Col>
           
          
          
    ) 
  }
    
    
export default SingleBook