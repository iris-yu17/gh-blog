'use client';

import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { Textarea, Button, TextInput, Modal } from 'flowbite-react';
import Prose from '@/components/ui/Prose';
import { updateIssue } from '@/fetch';
import { IssueDataType } from '@/types';

export default function EditContent({
  token,
  issueData,
}: {
  token: string;
  issueData: IssueDataType;
}) {
  const { title, body, number } = issueData;

  const [titleValue, setTitleValue] = useState(title);
  const [bodyValue, setBodyValue] = useState(body);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');

  const handleUpdatePost = async () => {
    const body = JSON.stringify({
      title: titleValue,
      body: bodyValue,
    });
    const res = await updateIssue(token, Number(number), body);
    if (res.message) {
      setModalText(`更新失敗：${res.message}`);
    } else {
      setModalText('更新成功');
    }
    setShowModal(true);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (bodyValue.length < 30) {
          setShowModal(true);
          setModalText('文章內容至少需要 30 字');
          return;
        }
        handleUpdatePost();
      }}
    >
      <div className="mb-2">請輸入文章標題：</div>
      <TextInput
        value={titleValue}
        onChange={(e) => {
          setTitleValue(e.target.value);
        }}
        required
      />
      <div className="flex flex-col md:flex-row gap-2 flex-grow mb-2">
        <div className="md:w-1/2 h-full">
          <div className="my-2">請輸入文章內容：</div>
          <Textarea
            required
            className="min-h-40"
            value={bodyValue}
            onChange={(e) => {
              setBodyValue(e.target.value);
            }}
          />
          <span className="mt-2 text-sm">目前字數：{bodyValue.length}</span>
        </div>
        <div className="md:w-1/2 h-full">
          <div className="my-2">預覽內文：</div>
          <div className="border-gray-300 border-dashed rounded-lg p-4 border-2 overflow-auto min-h-40">
            <Prose>
              <Markdown>{bodyValue}</Markdown>
            </Prose>
          </div>
        </div>
      </div>
      <Button type="submit">更新</Button>

      <Modal
        show={showModal}
        size="md"
        onClose={() => setShowModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {modalText}
            </h3>
          </div>
        </Modal.Body>
      </Modal>
    </form>
  );
}
