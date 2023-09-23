import { PageHeader } from "@ant-design/pro-layout";
import { Divider } from "antd";
import React, { Component } from "react";

export default class ContentHeader extends Component {
  render() {
    const { navigate, title, className } = this.props;
    return (
      <>
        <PageHeader
          className={className}
          title={title}
          onBack={() => navigate(-1)}
        />
      </>
    );
  }
}
