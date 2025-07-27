import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-xl">
            <Dialog.Title className="text-lg font-medium text-gray-900">{title}</Dialog.Title>
            <div className="mt-2 text-gray-600">
              {message}
            </div>

            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onConfirm();
                  onClose();
                }}
                className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ConfirmModal;
