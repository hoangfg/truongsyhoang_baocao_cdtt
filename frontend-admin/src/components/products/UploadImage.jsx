import { Modal, Upload, message } from "antd";
import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const UploadImage = (props) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const handleCancel = () => {
    setPreviewOpen(false);
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handlePreview = async (file) => {
    file.preview ??= await getBase64(file.originFileObj);
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = (info) => {
    const { fileList } = info;
    const status = info.file.status;

    if (status !== "uploading") {
      console.log(info.file);
    }

    if (status === "done") {
      message.success(`${info.file.name} file uploaded success`);
    } else if (status !== "loading") {
      message.error(`${info.file.name} file upload failed`);
    } else if (status === "remove") {
      message.success(`${info.file.name} file remove success`);
    }

    props.onUpdateFileList(fileList.slice());
  };

  const handleRemove = (info) => {
    if (info.fileName) {
      console.log("delete " + info.fileName);
    } else if (info.response && info.response.fileName) {
      console.log("delete " + info.response.fileName);
    }

    const { fileList } = props;
    const updatedFileList = fileList.filter((file) => file.uid !== info.uid);
    props.onUpdateFileList(updatedFileList);
  };
  const onUpdateFileList = (fileList) => {
    console.log("update file list: ", fileList);
    props.onUpdateFileList(fileList);
  };

  const uploadButton = (
    <div>
      <AiOutlineCloudUpload style={{ fontSize: "50px" }} />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const { fileList } = props;

  return (
    <>
      <Upload
        name="file"
        action="http://localhost:8080/api/books/images/one"
        listType="picture-card"
        defaultFileList={fileList}
        multiple={true}
        onPreview={handlePreview}
        onChange={handleChange}
        onRemove={handleRemove}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="Preview Image" src={previewImage} style={{ width: "100%" }} />
      </Modal>
    </>
  );
};

export default UploadImage;
