import React from 'react';
import HomePagePostModal from '../../molecules/homePagePosts/HomePagePostModal'; // Подключаем модалку из HomePagePostModal

interface ExplorePostModalProps {
  post: object // Данные поста
  isOpen: boolean; // Состояние открытия модалки
  onClose: () => void; // Функция закрытия модалки
}

const ExplorePostModal: React.FC<ExplorePostModalProps> = ({ post, isOpen, onClose }) => {
  if (!isOpen) return null;

  return <HomePagePostModal post={post} onClose={onClose} />;
};

export default ExplorePostModal;
