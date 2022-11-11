import React, { useEffect, useState } from 'react';
import {
  InputGroup,
  Button,
  Card,
  Col,
  Row,
  Container,
  Form,
  Placeholder,
} from 'react-bootstrap';

export function Ads() {
  const [ads, setAds] = useState();
  useEffect(() => {
    try {
      const resp = fetch('http://localhost:4001/ads', {
        method: 'get',
      });
      resp
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setAds(result);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <h1 className="mb-3" style={{ textAlign: 'center' }}>
        Talk Valley
      </h1>
      <div
        className="mb-3"
        style={{ width: '50%', textAlign: 'center', marginLeft: '20%' }}
      >
        <InputGroup>
          <Form.Control aria-label="Search" />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </div>
      <div className="d-flex justify-content-around">
        <Container>
          <Row xs={1} md={3} className="g-4">
            {ads && ads.length > 0 ? (
              ads.map((ad, index) => {
                const idImage = ad.imageUrl.split('/');
                return (
                  <Col key={index}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img
                        variant="top"
                        src={
                          ad.companyId === 6
                            ? `https://drive.google.com/uc?export=view&id=17nXWIFT-63JLfEvBEuQiyDYmA2dckCmq`
                            : `https://drive.google.com/uc?export=view&id=${idImage[5]}`
                        }
                      />
                      <Card.Body>
                        <Card.Title>{ad.headline}</Card.Title>
                        <Card.Text>{ad.description}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={4} /> <Placeholder xs={6} />{' '}
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
              </Card>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
}
