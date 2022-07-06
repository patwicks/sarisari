import React from "react";
import cover from "../../assets/cover.jpg";
import useUserStore from "../../store/userStore";
const Account = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div className="min-w-[288px] overflow-hidden p-2">
      <div className="relative min-h-[14rem] w-full overflow-hidden rounded-md bg-white shadow-xl">
        <div className="h-[7rem] w-full overflow-hidden">
          <img
            className="h-full w-full object-cover object-center opacity-100"
            src={cover}
            alt="coverImage"
          />
        </div>
        <div className="center absolute top-20 left-4 h-14 w-14 overflow-hidden  rounded-full border-4 border-white bg-white">
          <img
            className="h-full w-full object-cover object-center"
            src={user?.profile}
            alt="profile"
          />
        </div>
        <h1 className="mt-10 ml-5 md:text-lg text-base font-bold capitalize">
          {user?.username}
        </h1>
        <p className="ml-5 text-sm text-blacky/80 ">username</p>
      </div>
    </div>
  );
};

export default Account;
