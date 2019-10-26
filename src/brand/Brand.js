import React from "react";
import { Popper, Layout } from "./Brand.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Brand = ({ title, icon, more }) => (
  <Layout more={more}>
    <FontAwesomeIcon icon={icon} />
    <Popper>
      {title.map((t, index) => (
        <p key={index}>{t}</p>
      ))}
    </Popper>
  </Layout>
);

export default Brand;
