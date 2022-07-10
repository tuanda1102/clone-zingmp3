import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
    background: ${(props) => (props.primary ? '#3460f5' : 'transparent')};
    color: #fff;
    font-size: 14px;
    margin-top: 5px;
    padding: 5px 25px;
    border: 1px solid ${(props) => (props.primary ? 'transparent' : '#fff')};
    border-radius: 20px;
`;
