import React from 'react';

interface IProps {
    type? : string;
    placeholder?: string;
}

const TextField: React.FC<IProps>  = ({type}) => {
  return <input type={type}/>;
};

export default TextField;