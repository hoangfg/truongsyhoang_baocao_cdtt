import React from "react";

export default function SetInnerHTML(description) {
  return <div dangerouslySetInnerHTML={{ __html: description }} />;
}
