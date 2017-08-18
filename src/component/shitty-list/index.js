import React from 'react';

const ShittyList = props => (
  <ul>
    {props.data.map((item, index) =>
      <li key={item._id}>
        <h3>{`#${index + 1}`}</h3>
        <p>{item.a}</p>
        <p>{`${item.c}, ${item.s}`}</p>
        <p>{item.z}</p>
        <p>{`Builder: ${item.builder}`}</p>
        <p>{`Certification Type: ${item.certType}`}</p>
      </li>
    )}
  </ul>
);

export default ShittyList;
