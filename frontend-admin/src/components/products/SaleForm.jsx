import { AiOutlineCloudUpload } from "react-icons/ai";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Upload,
} from "antd";
import React, { Component } from "react";
import CustomForm from "./CustomForm";
import moment from "moment";

class SaleForm extends Component {
  form = React.createRef();
  render() {
    const { book } = this.props;
    let beginSaleDate;
    let endSaleDate;

    if (moment(book.beginSale, "YYYY-MM-DD").isValid()) {
      beginSaleDate = moment(book.beginSale, "YYYY-MM-DD");
    }

    if (moment(book.endSale, "YYYY-MM-DD").isValid()) {
      endSaleDate = moment(book.endSale, "YYYY-MM-DD");
    }
    return (
      // <CustomForm>
      <Row>
        

        <Col md={11}></Col>
      </Row>
      // </CustomForm>
    );
  }
}

export default SaleForm;
