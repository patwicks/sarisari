import React, { useState } from "react";
import { useFormik } from "formik";
import useUserStore from "../../store/userStore";
import Dashboard from "./Dashboard";
import Modal from "./Modal";

//icons
import { FaUserEdit } from "react-icons/fa";

const Account = () => {
  const { user, updateAvatar, isUploading } = useUserStore((state) => ({
    user: state.user,
    updateAvatar: state.updateAvatar,
  }));
  const [openModal, setOpenModal] = useState(false);
  const { _id: userID } = user;
  const onSubmit = (values, actions) => {
    const data = new FormData();
    data.append("image", values.image);
    if (userID) {
      setTimeout(() => {
        updateAvatar(userID, data);
        actions.resetForm();
        actions.setSubmitting(false)
        setOpenModal(!openModal);
      }, 2000);
    }
  };
  //formik
  const { setFieldValue, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      image: "",
    },
    onSubmit,
  });

  return (
    <div className="min-w-[288px] overflow-hidden p-2">
      <div className="relative min-h-[14rem] w-full overflow-hidden rounded-md bg-white shadow-xl">
        <div className="h-[7rem] w-full overflow-hidden bg-slate-200"></div>
        <div className="center absolute top-20 left-4 h-14 w-14 overflow-hidden  rounded-full border-4 border-white bg-white">
          <img
            className="h-full w-full object-cover object-center"
            src={user?.profile}
            alt="profile"
          />
        </div>
        <h1 className="mt-10 ml-5 cursor-pointer text-base font-bold capitalize md:text-lg">
          {user?.username}
        </h1>
        <p className="ml-5 text-sm text-blacky/70 ">username</p>
        <div className="center absolute right-5 bottom-1 ml-5 h-10 w-10 cursor-pointer overflow-hidden rounded-full bg-slate-200 hover:opacity-50">
          <FaUserEdit
            className="text-xl text-primary "
            onClick={() => setOpenModal(!openModal)}
          />
        </div>
      </div>
      {/* ======================== */}
      <Modal isOpen={openModal}>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h1>Change Avatar</h1>
          <input
            className="rounded-sm border-[0.05rem] px-4 py-1 outline-1 outline-primary/60"
            required
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => setFieldValue("image", e.target.files[0])}
          />
          <button
            className="mt-5 md:mt-0 rounded-md border-none bg-blue-400 px-5 py-2 text-sm text-white outline-none hover:opacity-60"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "uploading..." : "submit"}
          </button>
        </form>
      </Modal>
      {/* ======================== */}
      <h1 className="mt-5 font-semibold text-blacky/80">Account summary</h1>
      <Dashboard />
    </div>
  );
};

export default Account;
