'use client';
import Image from "next/image"
import { Children, MouseEventHandler } from "react";

interface CustomButtonProps{
    children: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}   

const CustomButton = ({children, containerStyles, handleClick, btnType,
                       textStyles, rightIcon, isDisabled}: CustomButtonProps) => {
  return (
    <button disabled = {false}
     type={btnType || "button"}
     className= {'custom-btn ' + containerStyles}
     onClick={handleClick}>

        <span className={'flex-1 ' + textStyles}>
            {children}
        </span>

        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image src={rightIcon} alt="right arrow icon" fill className="object-contain"/>
          </div>
        )}
    </button>
  )
}

export default CustomButton