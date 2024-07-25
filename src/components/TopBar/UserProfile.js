import React from 'react';

const UserProfile = () => {
  return (
    <div className="flex items-center gap-4 text-xs text-color-black-100 font-plus-jakarta-sans">
      <div className="flex items-center gap-4">
        <img className="h-12 w-12 rounded-341xl" alt="Profile Photo" src="/iconprofilphoto.svg" />
        <div className="flex flex-col">
          <div className="font-semibold">John Doe</div>
          <div className="text-color-black-50">johndoe@gmail.com</div>
        </div>
      </div>
      {/* <img className="h-6 w-6" alt="More Icon" src="/iconmore.svg" /> */}
    </div>
  );
};

export default UserProfile;
