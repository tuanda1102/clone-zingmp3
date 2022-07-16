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

export const CircleButton = styled.button`
    margin-left: 4px;
    background: ${(props) => (props.primary ? '#3460f5' : 'transparent')};
    color: #fff;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => (props.width ? props.width : '25px')};
    height: ${(props) => (props.height ? props.height : '25px')};
    &:hover {
        opacity: 0.8;
    }
`;
