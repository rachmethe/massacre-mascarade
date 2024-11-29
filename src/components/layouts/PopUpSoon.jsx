import React from 'react';

const PopUpSoon = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleOverlayClick = (e) => {
    // Закрываем попап, если кликнули на область вне попапа
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOverlayClick} // Добавляем обработчик клика
    >
      <div className="bg-white rounded-lg p-6 text-center shadow-lg w-3/4 max-w-sm">
        <p className="text-xl text-gray-800 mb-4">Скоро</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default PopUpSoon;
