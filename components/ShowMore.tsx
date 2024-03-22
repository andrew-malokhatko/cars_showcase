"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

interface ShowMoreProps{
    pageNumber: number;
    isNext: boolean;
}

const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 12;
        const newPathName = updateSearchParams("limit", `${newLimit}`);

        router.push(newPathName, {scroll:false});
    }

  return (
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
            <CustomButton handleClick={handleNavigation} containerStyles="bg-primary-blue rounded-full text-white">
                Show More
            </CustomButton>
        )}
    </div>
  )
}

export default ShowMore