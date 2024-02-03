import React from 'react'
import {FaHouseUser, FaLink, FaMapMarker, FaTwitter } from "react-icons/fa";

export const Container = () => {
  return (
    <div className="w-full bg-blue-950 px-4 py-8 mt-5 rounded-lg">
      <div className="md:flex justify-between mb-3">
        <div className="flex items-center gap-5">
          <img
            src="../../public/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg"
            alt=""
            className="w-[5rem] h-[5rem] object-cover rounded-[500px]"
          />
          <div>
            <div>
              <h2 className="text-white text-2xl font-bold">Profile Name</h2>
              <p className="text-blue-500 mb-6">@Username</p>
            </div>
            <p className="text-gray-400">Bio of profile</p>
          </div>
        </div>
        <p className="text-gray-300 mt-4 md:mt-0">Joined date</p>
      </div>
      {/* profile detail section */}
      <div>
        <div className="min-h-5 lg:w-[76%] ml-auto">
          <div className="flex justify-between bg-gray-900 rounded-xl py-3 px-4">
            <div>
              <p className="font-normal text-[13px] text-gray-300">Posts</p>
              <p className="text-white font-bold">00</p>
            </div>
            <div>
              <p className="font-normal text-[13px] text-gray-300">Followers</p>
              <p className="text-white font-bold">00</p>
            </div>
            <div>
              <p className="font-normal text-[13px] text-gray-300">Following</p>
              <p className="text-white font-bold">00</p>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex justify-around">
              <div className="flex gap-3 items-center">
                <FaMapMarker className="text-white" />
                <p className="font-bold text-[13px] text-gray-300">
                  Location
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaTwitter className="text-white" />
                <p className="font-bold text-[13px] text-gray-300">
                  Twitter Link
                </p>
              </div>
            </div>
            <div className="flex justify-around mt-6">
              <div className="flex gap-3 items-center">
                <FaLink className="text-white" />
                <p className="font-bold text-[13px] text-gray-300">
                  https://example.com
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaHouseUser className="text-white" />
                <p className="font-bold text-[13px] text-gray-300">
                  Twitter Link
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
