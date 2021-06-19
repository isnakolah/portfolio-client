import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

const MetaData = ({ title, metas }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {() =>
        metas.map((meta) => {
          <meta name={meta.description} content={meta.content} />;
        })
      }
    </Helmet>
  );
};

MetaData.propTypes = {
  title: PropTypes.string.isRequired,
  metas: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MetaData;
