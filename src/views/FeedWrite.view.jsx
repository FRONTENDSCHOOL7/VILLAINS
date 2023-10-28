import PageTemplate from '../components/PageTemplate';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import imageBigIcon from '../assets/image-big-icon.svg';
import FloatingButton from '../components/FloatingButton.style';
import imageIcon from '../assets/image-icon.svg';

const FeedWritePage = () => {
  const textarea = useRef();
  const file = useRef();

  // const [content, setContent] = useState('');
  // const [image, setImage] = useState(null);

  const handleResizeHeight = () => {
    textarea.current.style.height = 'auto';
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  };

  const triggerFileInput = () => {
    file.current.click();
  };

  return (
    <PageTemplate>
      {/* 임시 헤더입니다. */}
      <Header>
        뒤로가기
        <UploadBtn>업로드</UploadBtn>
      </Header>
      <FeedWriteForm>
        <form>
          <ImagePreview bg={imageBigIcon}>
            <PreviewSpan>
              오른쪽 하단 버튼을 눌러
              <br />
              이미지를 추가해보세요.
            </PreviewSpan>
          </ImagePreview>
          <Textarea
            ref={textarea}
            rows="1"
            placeholder="게시글 입력하기..."
            onChange={handleResizeHeight}
          ></Textarea>

          <InsertImageBtn htmlFor="file">
            <FloatingButton img={imageIcon} type="button" onClick={triggerFileInput} />
          </InsertImageBtn>
          <InputFile ref={file} type="file" id="file" accept="image/*" />
        </form>
      </FeedWriteForm>
    </PageTemplate>
  );
};
export default FeedWritePage;

const Header = styled.header`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  background-color: #dbdbdb;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UploadBtn = styled.button`
  width: 90px;
  height: 32px;
  border-radius: 32px;
  color: #fff;

  &:disabled {
    background-color: #b1bce6;
  }

  &:enabled {
    background-color: #3c58c1;
  }
`;

const FeedWriteForm = styled.section`
  width: 100%;
  padding: 30px 32px;
`;

const InputFile = styled.input`
  display: none;
`;

const InsertImageBtn = styled.label`
  width: 50px;
  height: 50px;
  z-index: 10;
`;

const ImagePreview = styled.div`
  width: 326px;
  height: 204px;
  border-radius: 10px;
  border: 0.5px solid #dbdbdb;
  background: #f4f4f4 url(${(props) => props.bg}) no-repeat center 50px;
  margin-bottom: 30px;

  color: #c4c4c4;
  text-align: center;
  font-size: 12px;
  line-height: 15px;
`;

const PreviewSpan = styled.span`
  position: relative;
  top: 124px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: none;
  resize: none;

  &::placeholder {
    color: #c4c4c4;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;