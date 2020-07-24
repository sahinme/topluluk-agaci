import React, { useState, useEffect } from 'react';
import { Alert } from 'reactstrap';
import { useRouter } from 'next/router';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import MainLayout from '../components/mainLayout';
import PopularTags from '../components/PopularTags';
import { getCategoriesRequest } from '../lib/category/actions';
import { createCommunityRequest } from '../lib/community/actions';
import { readLocalStorage } from '../lib/helpers';

function CreateCommunity({ categories, getCategories, create, response }) {
  const router = useRouter();

  const [payload, setPayload] = useState({
    name: null,
    description: null,
    catSlug: 'dizifilm'
  });

  useEffect(() => {
    const token = readLocalStorage('token');
    if (!token) {
      router.back();
    }
    getCategories();
  }, []);

  const handleInputChange = ({ currentTarget: input }) => {
    const currentValues = { ...payload };
    currentValues[input.id] = input.value;
    setPayload(currentValues);
  };

  const handleSubmit = () => {
    create(payload);
  };

  return (
    readLocalStorage('token') && (
      <MainLayout>
        <Container>
          <Row style={{ marginTop: '1rem', flexWrap: 'wrap-reverse' }}>
            <Col style={{ paddingBottom: '10px' }} xs={12} md={8}>
              {response && response.message && (
                <Alert color="danger">{response.message}</Alert>
              )}
              <Form>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Topluluk Adı</Form.Label>
                    <Form.Control
                      onChange={handleInputChange}
                      id="name"
                      type="text"
                      placeholder="örn:bilim ve uzay"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group>
                  <Form.Label>Kategori</Form.Label>
                  <Form.Control
                    onChange={handleInputChange}
                    id="catSlug"
                    as="select"
                    custom
                  >
                    {categories &&
                      categories.map((c) => (
                        <option key={c.slug} value={c.slug}>
                          {c.displayName}
                        </option>
                      ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Hakkında ve Kurallar</Form.Label>
                  <Form.Control
                    placeholder="örn: Dizi film replikleri yorumlari ve tartismalari"
                    onChange={handleInputChange}
                    id="description"
                    as="textarea"
                    rows="3"
                  />
                </Form.Group>
                <Button
                  disabled={!payload.name || !payload.description}
                  onClick={handleSubmit}
                  variant="primary"
                >
                  Oluşturmaya çalış
                </Button>
              </Form>
            </Col>
            <Col style={{ paddingBottom: '10px' }} xs={12} md={4}>
              <div
                style={{
                  position: '-webkit-sticky',
                  position: 'sticky',
                  top: 0
                }}
              >
                <PopularTags />
              </div>
            </Col>
          </Row>
        </Container>
      </MainLayout>
    )
  );
}

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategoriesRequest()),
  create: (payload) => dispatch(createCommunityRequest(payload))
});

const mapStateToProps = (state) => ({
  categories: state.categories.data,
  response: state.communities.createResponse
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCommunity);
