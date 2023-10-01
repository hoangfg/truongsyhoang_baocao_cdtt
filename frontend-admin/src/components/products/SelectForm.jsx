import { AiOutlineCloudUpload } from "react-icons/ai";
import {
  Button,
  Col,
  Divider,
  Form,
  Image,
  Input,
  Row,
  Select,
  Upload,
} from "antd";
import React, { Component } from "react";
import CustomForm from "./CustomForm";
import authorService from "../../services/authorService";

class SelectForm extends Component {
  form = React.createRef();
  render() {
    const { book, publisherList, authorList, genresList, languageList } =
      this.props;
    console.log("1", publisherList);
    console.log("book trong SelectForm:", book);
    return (
      // <CustomForm>

      <Row>
        <Col md={12}>
          <Form.Item
            label="publisher"
            name="publisherId"
            labelCol={{ span: 24 }}
            initialValue={book.publisherId}
            rules={[
              {
                required: true,
                message: "Vui lòng chọn.",
              },
            ]}
            hasFeedback
          >
            <Select placeholder="Chọn nhà xuất bản">
              {publisherList &&
                publisherList.map((item) => (
                  <Select.Option value={item.id} key={"pub" + item.id}>
                    {item.name}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="language"
            name="languageId"
            labelCol={{ span: 24 }}
            initialValue={book.languageId}
            rules={[
              {
                required: true,
                message: "Vui lòng chọn.",
              },
            ]}
            hasFeedback
          >
            <Select placeholder="Chọn ngôn ngữ">
              {languageList &&
                languageList.map((item) => (
                  <Select.Option value={item.id} key={"lan" + item.id}>
                    {item.name}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="genres"
            name="genresId"
            labelCol={{ span: 24 }}
            initialValue={book.genresId}
            rules={[
              {
                required: true,
                message: "Vui lòng chọn.",
              },
            ]}
            hasFeedback
          >
            <Select placeholder="Chọn thể loại">
              {genresList &&
                genresList.map((item) => (
                  <Select.Option value={item.id} key={"gen" + item.id}>
                    {item.name}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="author"
            name="authorId"
            labelCol={{ span: 24 }}
            initialValue={book.authorId}
            rules={[
              {
                required: true,
                message: "Vui lòng chọn.",
              },
            ]}
            hasFeedback
          >
            <Select placeholder="Chọn tác giả">
              {authorList &&
                authorList.map((item) => (
                  <Select.Option value={item.id} key={"aut" + item.id}>
                    <Image
                      src={authorService.getPhotoUrl(item.image)}
                      height={32}
                    ></Image>
                    <span> {item.name}</span>
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      // </CustomForm>
    );
  }
}

export default SelectForm;
