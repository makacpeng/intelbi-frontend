import { QuestionCircleOutlined } from '@ant-design/icons';
import '@umijs/max';
import React from 'react';

export type SiderTheme = 'light' | 'dark';

interface SelectLangProps {
  style?: { padding: number };
}

export const SelectLang = ({ style }: SelectLangProps) => {
  // @ts-ignore
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <SelectLang
      style={{
        padding: 4,
      }}
    />
  );
};
export const Question = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: 26,
      }}
      onClick={() => {
        window.open('https://pro.ant.design/docs/getting-started');
      }}
    >
      <QuestionCircleOutlined />
    </div>
  );
};
