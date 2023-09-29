import React, { Component } from "react";
import ContentHeader from "../common/ContentHeader";
import { Route } from "react-router-dom";
import withRouter from "../../helpers/withRouter";
import { Col, Divider, Row, Steps, Tabs } from "antd";
import BookForm from "./BookForm";
import UploadImage from "./UploadImage";
import CkediterForm from "./CkediterForm";
import SelectForm from "./SelectForm";
import StoreForm from "./StoreForm";
import SaleForm from "./SaleForm";
const { Step } = Steps;
const items = [
  {
    key: "1",
    label: "Infomation",
    children: (
      <>
        <Divider />
        <BookForm book={{}} />
      </>
    ),
  },
  {
    key: "2",
    label: "Description",
    children: (
      <>
        <Divider />
        <CkediterForm book={{}} />
      </>
    ),
  },
  {
    key: "3",
    label: "Select",
    children: (
      <>
        <Divider />
        <SelectForm book={{}} />
      </>
    ),
  },
  {
    key: "4",
    label: "Images",
    children: (
      <>
        <Divider />
        <UploadImage />
      </>
    ),
  },
  {
    key: "5",
    label: "Store",
    children: (
      <>
        <Divider />
        <StoreForm book={{}} />
      </>
    ),
  },
  {
    key: "6",
    label: "Sale",
    children: (
      <>
        <Divider />
        <SaleForm book={{}} />
      </>
    ),
  },
];
class AddOrEditBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };
  }

  render() {
    const { navigate } = this.props.router;
    const { step } = this.state;
    const title = "Book";

    return (
      <>
        <ContentHeader
          navigate={navigate}
          title={title}
          className="site-page_header "
        />
        <Row style={{ padding: "20px" }}>
          <Col md={24}>
            <Tabs
              defaultActiveKey="1"
              items={items}
              indicatorSize={(origin) => origin - 16}
            />
          </Col>
        </Row>
        {/* <Row>
          <Col md={24}>
            <Steps current={step} style={{ padding: "10px" }}>
              <Step
                title="Basic Information"
                description="Fill basic information"
              />
              <Step title="Image" description="Choose the list of images" />
            </Steps>
          </Col>
        </Row>
        <Row style={{ padding: "20px" }}>
          {step === 0 && (
            <>
              <Divider />
              <BookForm book={{}} />
            </>
          )}
          {step === 1 && (
            <>
              <Divider />
              <UploadImage onPrevStep={this.handlePrevStep} />
            </>
          )}
        </Row> */}
      </>
    );
  }
}

export default withRouter(AddOrEditBook);
