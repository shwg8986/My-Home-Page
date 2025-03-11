import React from "react";
import styled from "styled-components";
import { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
}

export const StyledButton = (props:ButtonProps) => {
    const {children} = props;
    return (
        <SButton>{children}</SButton>
    );
};

const SButton = styled.button`
  display: inline-block;
  margin:10px 0 80px 0;
  font-size:20px;
  font-weight: normal;
  position: relative;
  background: #fff;
  color: #614f38;
  border: 1px solid #444;
  padding: 1.2rem 2.5rem 1.2rem 2.5rem;
  transition: all .3s;
  border-radius: 30px;
  &:before,
  &:after {
    content: "";
    position: absolute;
    display: block;
    transition: all .3s;
  }
  &:before {
    opacity: 0;
    width: 7px;
    height: 7px;
    top: 50%;
    right: 1.4rem;
    border-top: solid 2px #614f38;
    border-right: solid 2px #614f38;
    transform: translateY(-50%) rotate(45deg);
  }
  &:after {
    opacity: 0;
    right: -2px;
    bottom: -2px;
    background: #614f38;
    z-index: -1;
    width: 0;
    height: 0;
  }
  &:hover {
    padding: 1.2rem 3.5rem 1.2rem 1.5rem;
    cursor:pointer;
    background: #ccc;
    border-radius: 20px;
    &:before {
      opacity: 1;
      border-color: #614f38;
    }
    &:after {
      opacity: 1;
      width: calc(100% + 2px);
      height: calc(100% + 2px);
    }
  }
`;
