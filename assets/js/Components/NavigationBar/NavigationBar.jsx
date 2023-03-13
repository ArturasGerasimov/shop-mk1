import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function NavigationBar() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}