import { FiSave } from "react-icons/fi";
import React, { Component } from "react";
import ContentHeader from "../common/ContentHeader";
import { Route } from "react-router-dom";
import withRouter from "../../helpers/withRouter";
import {
  Button,
  Col,
  Divider,
  Form,
  Row,
  Space,
  Steps,
  Tabs,
  message,
} from "antd";
import BookForm from "./BookForm";
import UploadImage from "./UploadImage";
import CkediterForm from "./CkediterForm";
import SelectForm from "./SelectForm";
import StoreForm from "./StoreForm";
import SaleForm from "./SaleForm";
import CustomForm from "./CustomForm";
import publisherService from "./../../services/publisherService";
import authorService from "./../../services/authorService";
import bookGenresService from "./../../services/bookGenresService";
import bookLanguageService from "./../../services/bookLanguageService";
const { Step } = Steps;

class AddOrEditBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      book: {
        id: "",
        name: "",
        price: 0,
        image: "",
        status: 0,
        detail: "",
        description: "",
        publisherId: "",
        authorId: "",
        genresId: "",
        languageId: "",
      },

      publisherList: [], // Thêm mảng publisherList vào state
      authorList: [], // Thêm mảng authorList vào state
      genresList: [], // Thêm mảng genresList vào state
      languageList: [],
    };
    this.form = React.createRef();
  }
  componentDidMount = () => {
    this.loadData();
  };
  loadData = async () => {
    try {
      const PublisherService = new publisherService();
      const publisherListResponset = await PublisherService.getPublishes();

      const AuthorService = new authorService();
      const authorListResponse = await AuthorService.getAuthors();

      const BookGenresService = new bookGenresService();
      const genresListResponse = await BookGenresService.getGenres();

      const BookLanguageService = new bookLanguageService();
      const languageListResponse = await BookLanguageService.getLanguage();

      this.setState({
        ...this.state,
        publisherList: publisherListResponset.data,
        authorList: authorListResponse.data,
        genresList: genresListResponse.data,
        languageList: languageListResponse.data,
      });
    } catch (error) {
      console.log(error);
      message.error("Error: " + error);
    }
  };

  saveBook = () => {
    console.log(this.form);
    if (this.form.current) {
      // Kiểm tra xem this.form.current có tồn tại không trước khi gọi validateFields
      this.form.current
        .validateFields()
        .then((values) => {
          console.log(values);
          const newValues = {
            ...values,
            description: this.state.descriptionCkData,
            detail: this.state.detailCkData,
          };
          console.log("Saving book:", newValues);
        })
        .catch((info) => {
          console.log(info);
          message.error("Invalid data. Please check again.");
        });
    } else {
      console.error("Form ref is not defined.");
    }
  };
  handleFormChange = (changedValues) => {
    this.setState((prevState) => ({
      book: {
        ...prevState.book,
        ...changedValues,
      },
    }));
  };
  render() {
    const { navigate } = this.props.router;
    const { publisherList, authorList, genresList, languageList } = this.state;
    const { book } = this.props;
    const title = "Book";
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
            <SelectForm
              book={{}}
              publisherList={publisherList}
              authorList={authorList}
              genresList={genresList}
              languageList={languageList}
            />
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
    const onFinish = (values) => {
      console.log("Received values:", values);
    };
    // console.log(this.state);
    return (
      <>
        <div className="content-header">
          <Row type="flex" justify="space-between" align="middle">
            <Col span={12}>
              <ContentHeader
                navigate={navigate}
                title="Danh sách thể loại"
                className="site-page_header"
              />
            </Col>
            <Col md={12} style={{ textAlign: "right" }}>
              <Space>
                <Button type="primary" onClick={this.saveBook}>
                  <FiSave /> <span> {book && book.id ? "Update" : "Save"}</span>
                </Button>
              </Space>
            </Col>
          </Row>
        </div>
        <Row style={{ padding: "20px" }}>
          <Col md={24}>
            <Form
              layout="vertical"
              className="form"
              size="middle"
              ref={this.form}
              {...this.props}
            >
              <Tabs
                defaultActiveKey="1"
                items={items}
                indicatorSize={(origin) => origin - 16}
              />
              <Divider></Divider>
            </Form>
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
