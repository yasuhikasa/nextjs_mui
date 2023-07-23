import React from 'react';
import { Button } from '@mui/material';

interface FirstButtonProps {
  onClick?: () => void; // クリック時に実行する関数
  type?: 'submit' | 'reset' | 'button'; // ボタンの種類
}

function FirstButton({ onClick, type }: FirstButtonProps) {
  return (
    <Button variant="contained" onClick={onClick} type={type}>
      登録
    </Button>
  );
}

export default FirstButton;