import React, { ReactNode } from "react";

interface IStoriesModal {
  params: {
    id: string;
  };
}

interface IModal {
  children: ReactNode;
}

export default function StoriesModal({ params: { id } }: IStoriesModal) {
  return (
    <Modal>
      <div>{id}</div>
    </Modal>
  );
}

function Modal({ children }: IModal) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop:blur-3xl z-50">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center">
        {children}
      </div>
    </div>
  );
}
