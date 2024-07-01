import React from 'react'
import Button from "./Button"

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Music"/>
      <Button name="Live"/>
      <Button name="Football"/>
      <Button name="Cricket"/>
      <Button name="Cooking"/>
    </div>
  );
};

export default ButtonList;