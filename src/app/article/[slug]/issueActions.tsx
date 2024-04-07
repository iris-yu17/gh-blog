'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Badge, Modal, Button } from 'flowbite-react';

import { closeIssue } from '@/fetch';

export default function IssueActions({
  token,
  issueNumber,
}: {
  token: string;
  issueNumber: number;
}) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [success, setSuccess] = useState(false);

  const handleDelete = async () => {
    const res = await closeIssue(token, issueNumber);

    if (res.message) {
      setModalText(`刪除失敗：${res.message}`);
      setSuccess(false);
    } else {
      setModalText('已成功刪除文章');
      setSuccess(true);
    }
    setShowModal(true);
  };

  return (
    <>
      <div className="flex gap-3 mb-3">
        <button onClick={()=>{
          router.push(`/edit/${issueNumber}`)
        }}>
          <Badge color="indigo" size="sm">
            編輯
          </Badge>
        </button>
        <button onClick={handleDelete}>
          <Badge color="failure" size="sm">
            刪除
          </Badge>
        </button>
      </div>

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
          {success && (
            <div className="flex justify-center">
              <Button
                onClick={() => {
                  router.push('/');
                }}
              >
                回到文章列表
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
