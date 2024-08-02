import React, { useEffect, useState } from 'react'
import { Button, Form, Modal, Spinner, Table } from 'react-bootstrap'
import { formatDate, formatUSD } from '../../config'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProduct } from '../../store/slices/productSlice';
import { RootState } from '../../store';
import { v4 as uuidv4 } from 'uuid';
import { ProductType } from '../../config/intefaces';



export default function Product() {
    const [pro , setPro] = useState<ProductType>({
        id: 0,
        name: '',
        price: 0,
        image: '',
        createAd: '',
        quantity: 0,
        description:''
    })
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const dispatch = useDispatch();
    // lấy dữ liệu từ store
    const { products, isLoading } = useSelector((state: RootState) => state.product);
    useEffect(() => {
        dispatch(fetchAllProduct()) // fetch dữ liệu về
    }, [])

    const handleSubmit = (e : React.FocusEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }

    return (
        <div>
            {isLoading && <Spinner animation="border" style={{ width: "500px", height: '500px' }} variant="danger" />}
            <h1>Trang quản lí sản phẩm</h1>
            <Button variant="primary" onClick={handleShow}>
                Add new Product
            </Button>
            {/*   bảng quản li sản phẩm */}
            <Table striped>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Created At</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((p, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{p.name}</td>
                                <td><img src={p.image} alt={p.name} style={{ width: 100, height: 100, objectFit: 'cover' }} /></td>
                                <td>{formatUSD.format(p.price)}</td>
                                <td>
                                    {formatDate(p.createAd)}
                                </td>
                                <td><Button variant='warning'>Sửa</Button></td>
                                <td><Button variant='danger'>Xóa</Button></td>
                            </tr>)
                    }
                </tbody>
            </Table>
            {/* modal ad */}
            <Form onSubmit={handleSubmit}>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="product name" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Ảnh</Form.Label>
                            <Form.Control type="text" placeholder="image Url" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Giá</Form.Label>
                            <Form.Control type="number" placeholder="price" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Số lượng</Form.Label>
                            <Form.Control type="number" placeholder="product quantity" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Mô tả</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit'>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </div>
    )
}
