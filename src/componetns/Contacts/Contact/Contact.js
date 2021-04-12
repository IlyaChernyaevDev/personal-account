import { useState } from 'react';
import { Display } from './Display';
import { EditForm } from './EditForm';

export const Contact = ({ name, phone }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {isEdit ? (
        <EditForm name={name} phone={phone} setIsEdit={setIsEdit} />
      ) : (
        <Display name={name} phone={phone} setIsEdit={setIsEdit} />
      )}
    </>
  );
};