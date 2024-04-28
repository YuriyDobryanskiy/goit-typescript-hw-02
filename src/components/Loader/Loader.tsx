import React from "react";
import { Oval } from 'react-loader-spinner';

const Loader: React.FC = () => {
  return (
    <div>
      <Oval
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="oval-loading"
      wrapperStyle={{ justifyContent: 'center', margin: '100px' }}
      wrapperClass=""
    />
    </div>
  );
};

export default Loader;
