import Modal from "./modal";

interface IStoriesModal {
  params: {
    id: string;
  };
}

export default function StoriesModal({ params: { id } }: IStoriesModal) {
  return (
    <Modal>
      <div>{id}</div>
    </Modal>
  );
}
