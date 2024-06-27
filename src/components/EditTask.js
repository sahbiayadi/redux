import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {updateTask} from '../redux/todoslices/Todoslice'
import {useDispatch } from 'react-redux';


function EditTask({id}) {
    const [show, setShow] = useState(false);
    const dispatch =useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [edited, setEdited] = useState({
        title:"",
        description:"",
    })
  return (
    <div>
       <Button variant="primary" onClick={handleShow}>
        Edit Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className='edit'>
            <input type='text' placeholder='Enter a task title'
             onChange={(e)=>{setEdited({...edited,title:e.target.value});
            }}
             />
              <input type='text' placeholder='Enter a task title'
             onChange={(e)=>{setEdited({...edited,description:e.target.value});
            }}
             />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" 
          onClick={()=>{
            handleClose();
         dispatch(updateTask({id: id,edited}))
          }}>
            Save Changes
        
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditTask
