import React, { FC, ReactElement, useContext, useEffect, useRef } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss";
import {useField } from 'formik';
import {FormInputErrorDisplay } from './InputErrorDisplay';
   
export interface FormInputSelectProps {
  name: string
  label: string
  options:FormInputSelectOption[]
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
}

export interface FormInputSelectOption {
  label: string
  value: string
}
   
export const FormInputSelect: FC<FormInputSelectProps> = ({
  name,
  label,
  options,
  placeholder,
  autoFocus = false,
  disabled = false,
}): ReactElement => {
  const [field, meta, helpers] = useField(name); 

  const errorDisplayControlName = name + "ErrorDisplay";
  
  const isInvalid:boolean = (meta.error && meta.touched) ? true : false;
      
  return (
    <div className="">
      <Form.Group controlId={name} className="mb-2 text-start">
          <Form.Label>{label}</Form.Label>
          <Form.Select
              data-testid={name}
              aria-label={name}  
              {...field} 
              disabled={disabled}
              autoFocus={autoFocus}
              isInvalid={isInvalid}
          >
              <option>Please Select One</option>
              {options.map((item, index) => {
                  return (
                  <option
                      data-test-option-id="select-option"
                      key={index}
                      value={item.value}
                  >
                    {item.label}
                  </option>
                  );
              })}
          </Form.Select>
          <Form.Control.Feedback className="text-start" type="invalid">{meta.error}</Form.Control.Feedback>
      </Form.Group>  
    </div>
  );
};
   