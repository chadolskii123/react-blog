import React from 'react';
import EditorContainer from '../components/write/EditorContainer';
import Responsive from '../components/common/Responsive';
import WriteActionButtonsContainer from '../components/write/WriteActionButtonsContainer';
import TagBoxContainer from '../components/write/TagBoxContainer';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
