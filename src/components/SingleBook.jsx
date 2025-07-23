import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CommentArea from './CommentArea';

function SingleBook({book, colorText, theme}){
  const [selected,setSelected]=useState(false)


    return (
     <>
      
     <Col  sm={6} md={6} lg={4} xl={3} xxl={3} className='my-4'>
             <Card className='h-100'>
             <Card.Img className={selected && 'border  border-3 border-danger'} onClick={()=> setSelected(!selected)} variant="top" src={book.img} style={{height:150}}/>
             <Card.Body style={{background: theme} }>
             <Card.Title style={{ color: colorText}} >{book.title}</Card.Title>
             <Card.Text style={{ color: colorText}} >
             Price: {book.price}
             </Card.Text>
              {selected && <CommentArea asin={book.asin}/>}
             </Card.Body>
             </Card>
           </Col>
          
           </>
    )
  }
    
    
export default SingleBook