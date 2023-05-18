import React from "react";

export default function StringPropChild({ data }) {
  .log(data);
  return (
    <>
      <div>Hello</div>
      <div>{data}</div>
    </>
  );
}
